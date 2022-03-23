import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../Context/CartContext'

import CartItem from '../Cart-item/CartItem'
import Button from '../Button/Button'

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cartDropdown.styles'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const handleGoToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage as='span'>Seu carrinho está vazio</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
