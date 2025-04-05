import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import RankingButton from '../../components/RankingButton';
import { option } from "../../server/auth/config"

export default async function Dashboard() {
  const session = await getServerSession(option);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="max-w-2xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Bienvenue, {session.user?.name} !
      </h1>
      <div className="text-center">
        <p className="text-xl text-gray-600 mb-4">Vous êtes connecté avec succès.</p>
        <p className="text-sm text-gray-500">
          Votre email: <span className="font-semibold">{session.user?.email}</span>
        </p>
      </div>
      <RankingButton />
    </div>
  );
}
