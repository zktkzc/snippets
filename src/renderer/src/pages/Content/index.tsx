import { useLoaderData } from 'react-router-dom'
import './style.scss'

export default function Content() {
  const content = useLoaderData() as ContentType

  return (
    <div className="content-page">
      <h1>{content.title}</h1>
      <div className="content">{content.content}</div>
    </div>
  )
}
