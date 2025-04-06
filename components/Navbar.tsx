"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const { data: session } = useSession();
  const tGlobal = useTranslations("Global");
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-blue-400 hover:text-blue-500">
          {tGlobal("WebName")}
        </Link>

        <div className="flex items-center space-x-6">
          {session ? (
            <>
              <Link
                href="/ranking"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
              >
                {tGlobal("Ranking")}
              </Link>
              <Link
                href="/dashboard"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
              >
                {tGlobal("Dashboard")}
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {tGlobal("Logout")}
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-gray-300 hover:text-white"
              >
                {tGlobal("Login")}
              </Link>
              <Link
                href="/register"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
              >
                {tGlobal("Register")}
              </Link>
              <Link
                href="/ranking"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
              >
                {tGlobal("Ranking")}
              </Link>
            </>
          )}

          <LanguageSelector />

        </div>
      </div>
    </nav>
  );
}
