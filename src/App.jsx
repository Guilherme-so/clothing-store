import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './Routes/Navigation/Navigation'
import Home from './Routes/Home/Home'
import Entrar from './Routes/Entrar/Entrar'

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
        <Route path='entrar' element={<Entrar />} />
      </Route>
    </Routes>
  )
}

export default App
