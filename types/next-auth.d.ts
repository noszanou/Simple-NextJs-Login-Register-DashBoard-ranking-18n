import 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    name?: string | null
  }

  interface Session {
    user: User
  }
}