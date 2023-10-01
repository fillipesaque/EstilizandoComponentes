import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Style/index.css' /* Modo um De estilizar Componentes Criando Arquivo Css é estilizando Globalmente */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
