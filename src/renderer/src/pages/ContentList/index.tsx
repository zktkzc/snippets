import { useLoaderData } from 'react-router-dom'
import './style.scss'

export default function ContentList() {
  const contents = useLoaderData() as ContentType[]

  return (
    <main className="content-page">
      <div className="list">
        {contents.map((content) => (
          <a key={content.id}>{content.title}</a>
        ))}
      </div>
      <div className="content">content</div>
    </main>
  )
}
