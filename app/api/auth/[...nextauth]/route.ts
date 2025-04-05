import NextAuth from "next-auth";
import { option } from "../../../../server/auth/config"

const handler = NextAuth(option);
export { handler as GET, handler as POST };
