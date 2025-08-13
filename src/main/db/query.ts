import { db } from '../db/connect'

const findAll = (sql: string, params: Record<string, any>) => {
  return db.prepare(sql).all(params)
}

const findOne = (sql: string) => {
  return db.prepare(sql).get()
}

const insert = (sql: string) => {
  return db.prepare(sql).run().lastInsertRowid
}

const update = (sql: string, params: Record<string, any>) => {
  return db.prepare(sql).run(params).changes
}

const del = (sql: string, params: Record<string, any>) => {
  return db.prepare(sql).run(params).changes
}

export { findAll, findOne, insert, update, del }
