import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { option } from "../../server/auth/config"
import { useTranslations } from "next-intl";

export default async function DashboardPage() {
  const session = await getServerSession(option);

  if (!session) {
    redirect("/login");
  }

  return <Dashboard session={session} />;
}

const Dashboard = ({ session }: { session: any }) => {
  const t = useTranslations("Global");

  return (
    <div className="max-w-2xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        {t("Welcome")}, {session.user?.name}!
      </h1>
      <div className="text-center">
        <p className="text-xl text-gray-600 mb-4">{t("SuccessMessage")}</p>
        <p className="text-sm text-gray-500">
          {t("YourEmail")}: <span className="font-semibold">{session.user?.email}</span>
        </p>
      </div>
    </div>
  );
};