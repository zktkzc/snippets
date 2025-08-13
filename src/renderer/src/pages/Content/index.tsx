import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import './style.scss'
import { ContentType, CategoryType } from 'types'

export default function Content() {
  const { content, categories } = useLoaderData() as {
    content: ContentType
    categories: CategoryType[]
  }
  const submit = useSubmit()

  return (
    <Form method="PUT">
      <div className="content-page" key={content.id}>
        <input hidden type="text" name="id" defaultValue={content.id} />
        <input
          name="title"
          placeholder="请输入标题..."
          autoFocus
          defaultValue={content.title}
          onChange={(e) => {
            submit(e.target.form)
          }}
        />
        <select
          name="category_id"
          value={content.category_id}
          onChange={(e) => submit(e.target.form)}
        >
          <option value="0">未分类</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <textarea
          name="content"
          placeholder="请输入频段内容..."
          defaultValue={content.content}
          onChange={(e) => {
            submit(e.target.form)
          }}
        />
      </div>
    </Form>
  )
}
