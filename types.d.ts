export type SqlActionType = 'findAll' | 'findOne' | 'insert' | 'update' | 'del'
export type CategoryType = {
  id: number
  name: string
  created_at: string
}
export type ContentType = {
  id: number
  title: string
  category_id: number
  content: string
  created_at: string
}
