import { auth, signOut } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";
import Link from "next/link";

export default async function Home() {
  const session = await auth();  

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white px-6">
        <section className="flex flex-col items-center gap-6 text-center max-w-lg">
          <h1 className="text-4xl font-semibold tracking-tight">
            Mini Sheets
          </h1>

          <p className="text-white/70 text-lg leading-relaxed">
            A clean and minimal workspace for tracking day-to-day tasks.
            Think spreadsheet, but simpler — and focused on you.
          </p>

          {session ? (
            <div className="flex flex-col items-center gap-3">
              <p className="text-white/80">
                Welcome,{" "}
                <span className="font-semibold text-white">
                  {session.user?.name ?? session.user?.email}
                </span>
              </p>

              <Link
                href="/dashboard"
                className="rounded-md bg-white/20 px-5 py-2 text-sm font-medium hover:bg-white/30 transition"
              >
                Go to Dashboard
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button
                  type="submit"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Sign out
                </button>
              </form>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
           
                <Link
                  href="/api/auth/signin"
                  type="submit"
                  className="rounded-md bg-white px-6 py-2 text-sm font-semibold text-black hover:bg-white/90 transition"
                >
                  Sign In
                </Link>
            
              <p className="text-white/60 text-sm">or</p>

              <Link
                href="/signup"
                className="rounded-md border border-white/30 px-6 py-2 text-sm font-medium hover:bg-white/10 transition"
              >
                Create an Account
              </Link>
            </div>
          )}
        </section>
      </main>
    </HydrateClient>
  );
}
