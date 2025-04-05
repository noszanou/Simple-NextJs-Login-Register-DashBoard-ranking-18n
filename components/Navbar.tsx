"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const { data: session } = useSession();
  const t = useTranslations("NavBar");

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo ou Nom du site */}
        <Link href="/" className="text-2xl font-semibold text-blue-400 hover:text-blue-500">
          Mon Site
        </Link>

        {/* Liens de navigation */}
        <div className="flex items-center space-x-6">
          {session ? (
            <>
              <span className="text-sm text-gray-300 mr-4">{session.user?.email}</span>
              <button
                onClick={() => signOut()}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {t("logout")}
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-gray-300 hover:text-white"
              >
                {t("login")}
              </Link>
              <Link
                href="/register"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
              >
                {t("register")}
              </Link>
              <Link
                href="/ranking"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
              >
                {t("ranking")}
              </Link>
              <Link
                href="/dashboard"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
              >
                {t("dashboard")}
              </Link>
            </>
          )}

          <LanguageSelector />

        </div>
      </div>
    </nav>
  );
}
