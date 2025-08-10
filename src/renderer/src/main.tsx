import '@renderer/assets/tailwind.css'
import '@renderer/assets/global.scss'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '@renderer/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
