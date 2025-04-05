import { AbstractIntlMessages } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function MetaData({
    locale,
    pathname
}: {
    locale: string;
    pathname: string;
})
{
    console.log(pathname);
    const getMetaDataKey = (pathname: string): string => {
        const routePatterns = [
            { regex: /\/login\/\d+/i, key: "LoginMetaData" },
            { regex: /\/register\/\d+/i, key: "RegisterMetaData" },
            { regex: /\/dashboard\/\d+/i, key: "DashboardMetaData" },
            { regex: /\/ranking\/\d+/i, key: "RankingMetaData" },
        ];

        const matchedRoute = routePatterns.find(route => route.regex.test(pathname));
        return matchedRoute ? matchedRoute.key : "MainMetaData";
    };
    const messages: AbstractIntlMessages = await getMessages({ locale });
    const metaData = messages[getMetaDataKey(pathname)] as { title?: string; description?: string } | undefined;
    const title = metaData?.title ?? "Default Title";
    const description = metaData?.description ?? "Default description";

    return (
        <head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </head>
    );
};