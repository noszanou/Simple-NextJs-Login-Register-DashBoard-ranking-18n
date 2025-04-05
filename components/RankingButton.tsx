"use client";

import { useRouter } from "next/navigation";

export default function RankingButton() {
  const router = useRouter();

  const redirectToRanking = () => {
    router.push("/ranking");
  };

  return (
    <button onClick={redirectToRanking} className="bg-blue-500 text-white p-2 rounded">
      Voir le classement
    </button>
  );
}
