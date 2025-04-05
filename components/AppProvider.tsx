"use client";

import { useSession } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/Navbar";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function AppProvider({
    messages,
    locale,
    children,
}: {
    messages: any;
    locale: string;
    children: React.ReactNode;
}) {
    const { status } = useSession();

    if (status === "loading") {
        return <LoadingSpinner />;
    }

return (
    <NextIntlClientProvider messages={messages} locale={locale}>
        <Navbar />
        {children}
    </NextIntlClientProvider>
    );
}
