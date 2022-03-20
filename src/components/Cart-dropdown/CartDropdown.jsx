import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../Context/CartContext'

import CartItem from '../Cart-item/CartItem'
import Button from '../Button/Button'
import './cartDropdown.styles.scss'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const handleGoToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
