import Database from 'better-sqlite3'

const db = new Database('', {})
db.pragma('journal_mode = WAL')
