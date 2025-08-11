import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import './style.scss'
import { useEffect } from 'react'
import dayjs from 'dayjs'

export default function ContentList() {
  const contents = useLoaderData() as ContentType[]
  const navigate = useNavigate()

  useEffect(() => {
    if (contents.length) {
      navigate(`/config/category/contentList/${contents[0].category_id}/content/${contents[0].id}`)
    }
  }, [contents])

  return (
    <main className="contentList-page">
      <div className="list">
        {contents.map((content) => (
          <NavLink
            to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
            key={content.id}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <div className="truncate">{content.title}</div>
            <div className="text-[10px] opacity-80">{dayjs(content.created_at).format('YYYY/MM/DD')}</div>
          </NavLink>
        ))}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
