import { Delete } from '@icon-park/react'
import dayjs from 'dayjs'
import { useContextMenu } from 'mantine-contextmenu'
import { NavLink, useSubmit } from 'react-router-dom'
import { ContentType } from 'types'

interface Props {
  content: ContentType
}

export const ContentItem = ({ content }: Props) => {
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()

  return (
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
      <div className="text-[10px] opacity-80">{dayjs(content.created_at).format('YYYY/MM/DD')}</div>
    </NavLink>
  )
}
