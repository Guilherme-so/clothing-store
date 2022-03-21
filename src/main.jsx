import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { UserProvider } from './Context/UserContext'
import { CategoriesProvider } from './Context/CategoriesContext'
import { CartProvider } from './Context/CartContext'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <UserProvider>

        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
