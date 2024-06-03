import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET!,
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  debug: true,
});

export {
  handlers,
  signIn,
  signOut,
  auth,
};
