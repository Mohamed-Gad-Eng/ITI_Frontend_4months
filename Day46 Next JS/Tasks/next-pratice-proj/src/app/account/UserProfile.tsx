import { type Session } from "next-auth";

export default function UserProfile({ session }: { session: Session }) {
  return (
    <div className="rounded-xl bg-slate-900/70 border border-slate-800 p-6">
      <h2 className="text-lg font-semibold text-white mb-3">Profile</h2>
      <div className="space-y-2 text-sm text-slate-200">
        <p>
          <span className="text-slate-400">Name:</span>{" "}
          {session.user?.name ?? "—"}
        </p>
        <p>
          <span className="text-slate-400">Email:</span>{" "}
          {session.user?.email ?? "—"}
        </p>
      </div>
    </div>
  );
}
