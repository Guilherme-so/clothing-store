import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Navigation from './Routes/Navigation/Navigation'
import Home from './Routes/Home/Home'
import Authentication from './Routes/Authentication/Authentication'
import Shop from './Routes/Shop/Shop'
import Checkout from './Routes/Checkout/Checkout'
import { checkUserSession } from './store/user/user.action'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
