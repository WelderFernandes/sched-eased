import { PrismaAdapter } from '@auth/prisma-adapter'
import { AuthOptions } from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import GoogleProvider from 'next-auth/providers/google'
import db from './prisma'

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          name: `${profile.name}`,
          email: profile.email,
          image: profile.picture,
          role: profile.role ? profile.role : 'USER',
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user.role = token.role
      return session
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
}
