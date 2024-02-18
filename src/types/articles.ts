export type ArticleType = {
  id: number
  createdAt: string
  cover: string
  title: string
  content: string
  authorId: number
  author?: {
    id: number
    name: string
    email: string
    password: string
    isAdmin: boolean
  }
}
