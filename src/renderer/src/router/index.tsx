import Category from '@renderer/pages/Category'
import categoryLoader from '@renderer/pages/Category/categoryLoader'
import Config from '@renderer/pages/Config'
import Content from '@renderer/pages/Content'
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
        path: '',
        element: <Category />,
        loader: categoryLoader,
        children: [
          {
            index: true,
            element: <Content />
          }
        ]
      }
    ]
  }
])

export default rotuer
