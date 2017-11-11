import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppContent from './application/app-content'

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App