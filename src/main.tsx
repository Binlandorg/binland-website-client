import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'

import { LanguageProvider } from 'context/Language/LanguageContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </LanguageProvider>
  </React.StrictMode>
)
