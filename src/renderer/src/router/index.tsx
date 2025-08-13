import Category from '@renderer/pages/Category'
import categoryLoader from '@renderer/pages/Category/categoryLoader'
import Config from '@renderer/pages/Config'
import Content from '@renderer/pages/Content'
import contentLoader from '@renderer/pages/Content/contentLoader'
import { ContentList } from '@renderer/pages/ContentList'
import contentAction from '@renderer/pages/Content/contentAction'
import contentListAction from '@renderer/pages/ContentList/contentListAction'
import contentListLoader from '@renderer/pages/ContentList/contentListLoader'
import Home from '@renderer/pages/Home'
import { Welcome } from '@renderer/pages/Welcome'
import { createHashRouter } from 'react-router-dom'
import categoryAction from '@renderer/pages/Category/categoryAction'

const rotuer = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'config',
    element: <Config />,
    children: [
      {
        path: 'category',
        element: <Category />,
        loader: categoryLoader,
        action: categoryAction,
        children: [
          {
            path: 'contentList/:cid?',
            loader: contentListLoader,
            action: contentListAction,
            element: <ContentList />,
            children: [
              {
                index: true,
                element: <Welcome />
              },
              {
                path: 'content/:id',
                loader: contentLoader,
                action: contentAction,
                element: <Content />
              }
            ]
          }
        ]
      }
    ]
  }
])

export default rotuer
