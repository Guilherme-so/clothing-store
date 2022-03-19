import {useContext} from 'react'

import {CartContext}from '../../Context/CartContext'

import CartItem from '../Cart-item/CartItem'
import Button from '../Button/Button'
import './cartDropdown.styles.scss'

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' >
        {cartItems.map((item)=> <CartItem key={item.id} cartItem={item}/> )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
