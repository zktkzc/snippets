import '@renderer/assets/tailwind.css'
import '@renderer/assets/global.scss'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '@renderer/router'
import { MantineProvider } from '@mantine/core'
import { ContextMenuProvider } from 'mantine-contextmenu'

import '@mantine/core/styles.layer.css'
import 'mantine-contextmenu/styles.layer.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <ContextMenuProvider>
        <RouterProvider router={router} />
      </ContextMenuProvider>
    </MantineProvider>
  </StrictMode>
)
