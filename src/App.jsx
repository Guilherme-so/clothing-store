import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './Routes/Navigation/Navigation'
import Home from './Routes/Home/Home'
import Authentication from './Routes/Authentication/Authentication'

const Shop = () => {
  return (
    <div>
      <h1>SHOP PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
