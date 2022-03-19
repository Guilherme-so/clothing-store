import { createContext, useState } from 'react'

export const CartContext = createContext({
  isModalOpen: false,
  setIsModalOpen: () => {},
})

export const CartProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const value = { isModalOpen, setIsModalOpen }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
