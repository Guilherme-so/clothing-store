import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { CartIconContainer, ShoppingSvg, CountItem } from './cartIcon.styles'

const CartIcon = () => {
  const { isModalOpen, setIsModalOpen, cartCount } = useContext(CartContext)

  const handleToogle = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <CartIconContainer onClick={handleToogle}>
      <ShoppingSvg />
      <CountItem>{cartCount}</CountItem>
    </CartIconContainer>
  )
}

export default CartIcon
