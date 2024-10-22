import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import "@arco-design/web-react/dist/css/arco.css";

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
