import { NavLink, Outlet, useLoaderData, useSubmit, Form } from 'react-router-dom'
import './style.scss'
import dayjs from 'dayjs'
import { ContentType } from 'types'
import { Add, Delete, Search } from '@icon-park/react'
import { useContextMenu } from 'mantine-contextmenu'

export const ContentList = () => {
  const contents = useLoaderData() as ContentType[]
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()

  return (
    <main className="contentList-page">
      <div className="list">
        <Form>
          <div className="flex items-center gap-1 border-b px-1 pr-2">
            <Search
              theme="outline"
              size="18"
              fill="#000"
              strokeWidth={3}
              className="ml-2 cursor-default"
            />
            <input
              name="searchWord"
              type="text"
              placeholder="搜索..."
              className="outline-none text-sm font-bold py-2 w-full"
              onChange={(e) => submit(e.target.form)}
            />
            <Add
              theme="outline"
              size="18"
              fill="#000"
              strokeWidth={3}
              className="mr-2 cursor-pointer"
              onClick={() => {
                submit(null, { method: 'POST' })
              }}
            />
          </div>
        </Form>
        {contents.map((content) => (
          <NavLink
            to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
            key={content.id}
            className="flex items-center justify-between"
            onContextMenu={showContextMenu(
              [
                {
                  key: 'remove',
                  title: '删除片段',
                  icon: <Delete theme="outline" size={18} strokeWidth={3} />,
                  onClick: () => {
                    submit({ id: content.id }, { method: 'DELETE' })
                  }
                }
              ],
              { className: 'contextMenu' }
            )}
          >
            <div className="truncate">{content.title}</div>
            <div className="text-[10px] opacity-80">
              {dayjs(content.created_at).format('YYYY/MM/DD')}
            </div>
          </NavLink>
        ))}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
