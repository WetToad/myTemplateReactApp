// Import this first to prevent overriding from bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../styles/index.css'

import MainNavbar from '../components/MainNavbar/MainNavbar.jsx'
import ReactBootstrapButton from '../components/ReactBootstrapButton/ReactBootstrapButton.jsx'
import NonReactBootstrapButton from '../components/NonReactBootstrapButton/NonReactBootstrapButton.jsx'
import InlineCSSButton from '../components/InlineCSSButton/InlineCSSButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainNavbar />
    <App />
  </StrictMode>,
)
