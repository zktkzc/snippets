import { useContextMenu } from 'mantine-contextmenu'
import { useSubmit } from 'react-router-dom'
import { Delete } from '@icon-park/react'
import { CategoryType } from 'types'
import style from './style.module.scss'
import useContent from '../useContent'
import { DragEvent } from 'react'

export const useCategory = (category: CategoryType) => {
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()
  const { updateContentCategory } = useContent()

  const contextMenu = () => {
    return showContextMenu(
      [
        {
          key: 'remove',
          title: '删除分类',
          icon: <Delete theme="outline" size={18} strokeWidth={3} />,
          onClick: () => {
            submit({ id: category.id }, { method: 'DELETE' })
          }
        }
      ],
      { className: 'contextMenu' }
    )
  }

  const dragHandle = {
    onDragOver: (e: DragEvent) => {
      e.preventDefault()
      const target = e.currentTarget as HTMLElement
      target.classList.add(style.draging)
    },
    onDragLeave: (e: DragEvent) => {
      const target = e.currentTarget as HTMLElement
      target.classList.remove(style.draging)
    },
    onDrop: (e: DragEvent) => {
      const target = e.currentTarget as HTMLElement
      target.classList.remove(style.draging)
      const id = e!.dataTransfer!.getData('id')
      updateContentCategory(Number(id), category.id)
    }
  }

  return { contextMenu, dragHandle }
}
