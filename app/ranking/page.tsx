"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface Player {
  id: number;
  name: string;
  score: number;
}

export default function Ranking() {
  const [players, setPlayers] = useState<Player[]>([]);
  const t = useTranslations("Ranking");
  useEffect(() => {
    fetch("/api/ranking")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-8">{useTranslations("Global")("Ranking")}</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4">{t("Rank")}</th>
              <th className="py-2 px-4">{t("Name")}</th>
              <th className="py-2 px-4">{t("Score")}</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="py-2 px-4 text-center text-gray-700">{index + 1}</td>
                <td className="py-2 px-4 text-center text-gray-700">{player.name}</td>
                <td className="py-2 px-4 text-center text-gray-700">{player.score} {t("Points")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}