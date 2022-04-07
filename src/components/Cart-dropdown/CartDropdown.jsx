import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CartItem from '../Cart-item/CartItem'
import Button from '../Button/Button'
import { selectCartItems } from '../../store/cart/cart.selector'

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cartDropdown.styles'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
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
