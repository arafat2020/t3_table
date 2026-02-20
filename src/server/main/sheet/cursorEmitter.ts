import { EventEmitter } from "events";

/**
 * Cursor position data broadcast to subscribers.
 */
export type CursorEvent = {
    userId: string;
    userName: string;
    row: number;
    col: number;
    color: string;
};

/**
 * Cell update data broadcast to subscribers.
 */
export type CellUpdateEvent = {
    userId: string;
    rowIndex: number;
    colIndex: number;
    value?: string;
    align?: string;
};

/**
 * Deterministic color from userId so the same user always gets the same color.
 */
function userIdToColor(userId: string): string {
    const COLORS = [
        "#EF4444", "#F97316", "#F59E0B", "#22C55E",
        "#14B8A6", "#3B82F6", "#8B5CF6", "#EC4899",
        "#06B6D4", "#10B981", "#6366F1", "#D946EF",
    ];
    let hash = 0;
    for (let i = 0; i < userId.length; i++) {
        hash = userId.charCodeAt(i) + ((hash << 5) - hash);
    }
    return COLORS[Math.abs(hash) % COLORS.length]!;
}

/**
 * In-memory event emitter that broadcasts cursor positions and cell updates per sheet.
 * Each sheet gets its own event channel keyed by sheetId.
 */
class SheetEmitter {
    private emitter = new EventEmitter();

    constructor() {
        // Allow many listeners (one per connected user per sheet)
        this.emitter.setMaxListeners(100);
    }

    // --- Cursor Events ---

    emitCursor(sheetId: string, userId: string, userName: string, row: number, col: number) {
        const event: CursorEvent = {
            userId,
            userName,
            row,
            col,
            color: userIdToColor(userId),
        };
        this.emitter.emit(`cursor:${sheetId}`, event);
    }

    onCursor(sheetId: string, callback: (event: CursorEvent) => void) {
        this.emitter.on(`cursor:${sheetId}`, callback);
    }

    offCursor(sheetId: string, callback: (event: CursorEvent) => void) {
        this.emitter.off(`cursor:${sheetId}`, callback);
    }

    // --- Cell Update Events ---

    emitCellUpdate(sheetId: string, userId: string, rowIndex: number, colIndex: number, value?: string, align?: string) {
        const event: CellUpdateEvent = { userId, rowIndex, colIndex, value, align };
        this.emitter.emit(`cell:${sheetId}`, event);
    }

    onCellUpdate(sheetId: string, callback: (event: CellUpdateEvent) => void) {
        this.emitter.on(`cell:${sheetId}`, callback);
    }

    offCellUpdate(sheetId: string, callback: (event: CellUpdateEvent) => void) {
        this.emitter.off(`cell:${sheetId}`, callback);
    }
}

/** Singleton instance */
export const cursorEmitter = new SheetEmitter();

