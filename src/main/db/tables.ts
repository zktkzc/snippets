import { db } from './connect'
import { Random } from 'mockjs'
import { findOne } from './query'

db.exec(`
create table if not exists categories (
    id integer primary key autoincrement not null,
    name text not null,
    created_at text not null
);
`)

db.exec(`
create table if not exists contents (
    id integer primary key autoincrement not null,
    title text not null,
    content text not null,
    category_id integer,
    created_at text not null
);
`)

db.exec(`
  create table if not exists config (
      id integer primary key autoincrement not null,
      content text not null
  );
  `)

function initData() {
  const isInit = findOne('select * from contents;')
  if (isInit) return

  db.exec(
    `insert into config(content) values('{"shortCut":"Alt+Space","databaseDirectory":"abc"}');`
  )

  for (let i = 1; i < 10; i++) {
    const name = Random.title(5, 10)
    db.exec(`
      insert into categories(name, created_at) values
          ('${name}', datetime());
      `)

    for (let j = 1; j < 10; j++) {
      const title = Random.title(5, 10)
      const content = Random.paragraph(5, 10)
      db.exec(`
        insert into contents(title, content, category_id, created_at) values
            ('${title}', '${content}', ${i}, datetime());
        `)
    }
  }
}

initData()
