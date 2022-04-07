import { useDispatch, useSelector } from 'react-redux'

import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

import { CartIconContainer, ShoppingSvg, CountItem } from './cartIcon.styles'

const CartIcon = () => {
  const dispatch = useDispatch()

  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIscartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen))
  }

  return (
    <CartIconContainer onClick={toggleIscartOpen}>
      <ShoppingSvg />
      <CountItem>{cartCount}</CountItem>
    </CartIconContainer>
  )
}

export default CartIcon
