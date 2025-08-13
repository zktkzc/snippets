import { Add, Search } from '@icon-park/react'
import { Form, useSubmit } from 'react-router-dom'

export const ContentSearch = () => {
  const submit = useSubmit()

  return (
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
  )
}
