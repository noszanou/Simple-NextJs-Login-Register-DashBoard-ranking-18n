"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/InputField";
import { loginSchema, LoginFormData } from "@/types/zod/login";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const router = useRouter();
  const t = useTranslations("Login");
  const [apiError, setApiError] = useState("");

  const onSubmit = async (data: LoginFormData) => {
    setApiError("");

    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      setApiError(t(res.error));
    } else {
      router.push("/dashboard");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Connexion</h1>
        {apiError && <p className="text-red-500 text-center mb-4">{apiError}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField
            label="Adresse email"
            type="email"
            placeholder="Entrez votre email"
            registration={register("email")}
            error={errors.email && t(errors.email.message || "")}
          />
          <InputField
            label="Mot de passe"
            type="password"
            placeholder="Entrez votre mot de passe"
            registration={register("password")}
            error={errors.password && t(errors.password.message || "")}
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Se connecter
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Vous n'avez pas de compte ?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              S'inscrire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
