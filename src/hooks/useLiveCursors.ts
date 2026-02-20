"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { api } from "~/trpc/react";
import type { Selection } from "./useSpreadsheet";

/**
 * Represents a remote collaborator's cursor on the spreadsheet.
 */
export type RemoteCursor = {
    userId: string;
    userName: string;
    row: number;
    col: number;
    color: string;
};

type UseLiveCursorsProps = {
    sheetId: string;
    selectedCell: Selection;
};

/**
 * Hook that manages live cursor positions for real-time collaboration.
 *
 * - Subscribes to `onCursorMove` SSE stream to receive other users' cursor positions
 * - Debounces and sends the current user's cursor via `cursorMove` mutation
 * - Automatically removes stale cursors after inactivity
 *
 * @returns Map of remote cursors keyed by userId
 */
export function useLiveCursors({ sheetId, selectedCell }: UseLiveCursorsProps) {
    const [remoteCursors, setRemoteCursors] = useState<Map<string, RemoteCursor>>(new Map());
    const debounceRef = useRef<NodeJS.Timeout | null>(null);
    const staleTimers = useRef<Map<string, NodeJS.Timeout>>(new Map());

    const cursorMoveMutation = api.sheet.cursorMove.useMutation();

    const STALE_TIMEOUT = 30_000; // Remove cursor after 30s of no updates

    // --- Subscribe to remote cursor events via SSE ---
    api.sheet.onCursorMove.useSubscription(
        { sheetId },
        {
            onData(data) {
                const cursor: RemoteCursor = {
                    userId: data.userId,
                    userName: data.userName,
                    row: data.row,
                    col: data.col,
                    color: data.color,
                };

                setRemoteCursors((prev) => {
                    const next = new Map(prev);
                    next.set(cursor.userId, cursor);
                    return next;
                });

                // Reset stale timer for this user
                const existing = staleTimers.current.get(cursor.userId);
                if (existing) clearTimeout(existing);
                staleTimers.current.set(
                    cursor.userId,
                    setTimeout(() => {
                        setRemoteCursors((prev) => {
                            const next = new Map(prev);
                            next.delete(cursor.userId);
                            return next;
                        });
                        staleTimers.current.delete(cursor.userId);
                    }, STALE_TIMEOUT)
                );
            },
        }
    );

    // --- Broadcast own cursor position (debounced) ---
    useEffect(() => {
        if (!selectedCell) return;

        if (debounceRef.current) clearTimeout(debounceRef.current);

        debounceRef.current = setTimeout(() => {
            cursorMoveMutation.mutate({
                sheetId,
                row: selectedCell.r,
                col: selectedCell.c,
            });
        }, 50); // 50ms debounce for responsiveness

        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [selectedCell, sheetId]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            staleTimers.current.forEach((timer) => clearTimeout(timer));
            staleTimers.current.clear();
        };
    }, []);

    return remoteCursors;
}
