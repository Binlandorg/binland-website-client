import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'

import { LanguageProvider } from 'context/Language/LanguageContext'
import App from './App'
// import { GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <GlobalStyle /> */}
    <LanguageProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </LanguageProvider>
  </React.StrictMode>
)
