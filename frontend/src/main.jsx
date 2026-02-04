import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './bootstrap.min.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreContextProvider from "../src/context/Storecontext.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
      <App />
  </StoreContextProvider>
  </BrowserRouter>
)
