import { db } from './connect'
import { findOne } from './query'

export function initTable() {
  db().exec(`
    create table if not exists categories (
        id integer primary key autoincrement not null,
        name text not null,
        created_at text not null
    );
  `)

  db().exec(`
    create table if not exists contents (
        id integer primary key autoincrement not null,
        title text not null,
        content text not null,
        category_id integer,
        created_at text not null
    );
  `)

  db().exec(`
    create table if not exists config (
        id integer primary key autoincrement not null,
        content text not null
    );
  `)

  initData()
}

function initData() {
  const isInit = findOne('select * from contents;')
  if (isInit) return

  db().exec(
    `insert into config(content) values('{"shortCut":"Alt+Space","databaseDirectory":"abc"}');`
  )
  db().exec(`
  insert into categories(name, created_at) values
      ('测试分类', datetime());
  `)

  db().exec(`
  insert into contents(title, content, category_id, created_at) values
      ('欢迎语', '欢迎使用Snippets软件，该软件由tkzc00制作，喜欢的话请点一个star哦~', 1, datetime());
  `)
}
