import { Outlet, useLoaderData } from 'react-router-dom'
import './style.scss'
import { ContentType } from 'types'
import { ContentSearch } from '@renderer/components/ContentSearch'
import { ContentItem } from '@renderer/components/ContentItem'

export const ContentList = () => {
  const contents = useLoaderData() as ContentType[]

  return (
    <main className="contentList-page">
      <div className="list">
        <ContentSearch />
        {contents.map((content) => (
          <ContentItem key={content.id} content={content} />
        ))}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
