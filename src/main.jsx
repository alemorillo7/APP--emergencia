import React from 'react'
import ReactDOM from 'react-dom/client'

import  '../src/css/styless.css'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/APP--emergencia">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
)
