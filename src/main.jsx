import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store'; // импортируйте ваш store
import { UpdateProvider } from './contexts/UpdateTime';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <Provider store={store}>
                <UpdateProvider>
                    <App />
                </UpdateProvider>
            </Provider>
    </React.StrictMode>

)
