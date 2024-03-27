import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log('credentials', req, credentials)
        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
})

export { handler as GET, handler as POST }
