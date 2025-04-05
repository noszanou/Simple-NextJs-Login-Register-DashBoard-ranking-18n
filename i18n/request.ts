import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async() => {
    const cookieLocale = (await cookies()).get("locale")?.value || "en";
    const locale = cookieLocale;
    return {
        locale,
        messages:(await import(`./lang/${locale}.json`)).default
    }
})

export async function getTranslations(namespace: string) {
    const locale = (await cookies()).get("locale")?.value || "en";
    const messages = (await import(`./lang/${locale}.json`)).default;
    return (key: string) => messages?.[namespace]?.[key] ?? key;
}