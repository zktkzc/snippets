import Database, * as BetterSqlite3 from 'better-sqlite3'
import { app } from 'electron'
import { resolve, dirname, join } from 'path'
import fs from 'fs'
import config from './config'

const db = (): BetterSqlite3.Database => {
  let dir = resolve(app.getPath('home'), 'snippets')
  if (config.databaseDirectory && fs.existsSync(config.databaseDirectory)) {
    dir = config.databaseDirectory
  }
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  const db: BetterSqlite3.Database = new Database(join(dir, 'data.db'), {})
  db.pragma('journal_mode = WAL')

  return db
}

export { db }
