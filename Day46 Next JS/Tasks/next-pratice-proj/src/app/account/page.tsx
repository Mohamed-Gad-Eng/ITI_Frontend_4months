import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOptions";
import UserProfile from "./UserProfile";
import OrderHistory from "./OrderHistory";

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return (
    <main className="max-w-7xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-semibold mb-6">Account</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <UserProfile session={session} />
        <OrderHistory />
      </div>
    </main>
  );
}
