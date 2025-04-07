"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import InputField from "@/components/InputField";
import { RegisterFormData, registerSchema } from "@/types/zod/register";


export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const t = useTranslations("Global");
  const router = useRouter();
  const [apiError, setApiError] = useState("");

  const onSubmit = async (data: RegisterFormData) => {
    setApiError("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      const json = await res.json();
      setApiError(json.error || "Erreur lors de l'inscription.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">{t("SignUp")}</h1>
        {apiError && <p className="text-red-500 text-center mb-4">{apiError}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField
            label={t("Email")}
            type="email"
            placeholder={t("EnterEmail")}
            data={register("email")}
            error={errors.email && t(errors.email.message || "")}
          />
          <InputField
            label={t("Password")}
            type="password"
            placeholder={t("EnterPassword")}
            data={register("password")}
            error={errors.password && t(errors.password.message || "")}
          />

          <InputField
            label={t("ConfirmPassword")}
            type="password"
            placeholder={t("EnterConfirmPassword")}
            data={register("confirmPassword")}
            error={errors.confirmPassword && t(errors.confirmPassword.message || "")}
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            {t("Register")}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            {t("AlreadyHaveAccount")}{" "}
            <a href="/login" className="text-blue-600 hover:underline">
            {t("SignIn")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
