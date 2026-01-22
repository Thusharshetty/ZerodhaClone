import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import HomePage from './Landing_page/Home/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
