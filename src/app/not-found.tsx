import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center">
            <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
            <p className="mt-4 text-2xl font-semibold text-gray-700">Page not found</p>
            <p className="mt-2 text-gray-500">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
            <div className="mt-8">
                <Link href="/dashboard">
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                        Go back to Dashboard
                    </Button>
                </Link>
            </div>
        </div>
    );
}
