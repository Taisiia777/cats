import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UpdateProvider } from './contexts/UpdateTime';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <UpdateProvider>
    <App />
    </UpdateProvider>
    </React.StrictMode>

)
