import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TranslateContextProvider } from './contexts/TranslateContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TranslateContextProvider>
      <App />
    </TranslateContextProvider>
  </StrictMode>
)
