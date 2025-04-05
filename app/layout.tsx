import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import SessionProvider from "@/components/SessionProvider";

import AppProvider from "@/components/AppProvider";

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <SessionProvider>
          <AppProvider messages={messages} locale={locale}>
            {children}
          </AppProvider>
        </SessionProvider>
      </body>
    </html>
  );
}