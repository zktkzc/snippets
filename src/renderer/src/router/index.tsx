import Category from '@renderer/pages/Category'
import categoryLoader from '@renderer/pages/Category/categoryLoader'
import Config from '@renderer/pages/Config'
import Content from '@renderer/pages/Content'
import contentLoader from '@renderer/pages/Content/contentLoader'
import ContentList from '@renderer/pages/ContentList'
import contentListLoader from '@renderer/pages/ContentList/contentListLoader'
import Home from '@renderer/pages/Home'
import { createHashRouter } from 'react-router-dom'

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
        children: [
          {
            path: 'contentList/:cid',
            loader: contentListLoader,
            element: <ContentList />,
            children: [
              {
                path: 'content/:id',
                loader: contentLoader,
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
