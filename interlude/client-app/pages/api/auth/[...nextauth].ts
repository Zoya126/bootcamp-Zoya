import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const allowedDomains = ["clientcompany.com"]; // List of allowed domains
const allowedEmails = ["specificuser@example.com"]; // Specific email addresses

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const email = user.email || "";
      const domain = email.split("@")[1];
      if (allowedDomains.includes(domain) || allowedEmails.includes(email)) {
        return true;
      }
      return false;
    },
  },
});
