import { Metadata } from "next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { AdminShell } from "@/components/admin/admin-shell";

export const metadata: Metadata = {
  title: "Atelier Dashboard | Niraj Jewellers Ltd",
  description: "Bespoke goldsmith and store administration.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const adminSession = cookieStore.get("niraj_admin_session")?.value;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && adminSession !== "authenticated_owner") {
    redirect("/admin/login");
  }

  const activeEmail = user?.email || "nirajjewellers@hotmail.com";

  return <AdminShell userEmail={activeEmail}>{children}</AdminShell>;
}
