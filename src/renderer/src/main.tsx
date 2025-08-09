import '@renderer/assets/tailwind.css'
import '@renderer/assets/global.scss'
import { createRoot } from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
