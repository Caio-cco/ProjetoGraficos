import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Graficos from './pages/Graficos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Graficos />
  </StrictMode>,
)
