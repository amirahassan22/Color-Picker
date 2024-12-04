import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import App from './Components/App/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)