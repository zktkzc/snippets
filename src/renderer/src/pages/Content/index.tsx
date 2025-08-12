import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import './style.scss'
import { Button } from 'antd'
import { ContentType } from 'types'

export default function Content() {
  const content = useLoaderData() as ContentType
  const submit = useSubmit()

  return (
    <Form method="PUT">
      <div className="content-page" key={content.id}>
        <input
          name="title"
          defaultValue={content.title}
          onChange={(e) => {
            submit(e.target.form)
          }}
        />
        <textarea
          name="content"
          defaultValue={content.content}
          onChange={(e) => {
            submit(e.target.form)
          }}
        />
      </div>
    </Form>
  )
}
