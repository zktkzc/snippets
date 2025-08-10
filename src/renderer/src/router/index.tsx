import Config from '@renderer/pages/Config'
import Home from '@renderer/pages/Home'
import { createHashRouter } from 'react-router-dom'

const rotuer = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'config',
    element: <Config />
  }
])

export default rotuer
