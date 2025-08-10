import Database, * as BetterSqlite3 from 'better-sqlite3'
import { app } from 'electron'
import { resolve, dirname } from 'path'
import fs from 'fs'

const file = resolve(app.getPath('home'), 'snippets', 'data.db')
if (!fs.existsSync(file)) {
  fs.mkdirSync(dirname(file), { recursive: true })
}
const db: BetterSqlite3.Database = new Database(file, {})
db.pragma('journal_mode = WAL')

export { db }
