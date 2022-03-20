import { useContext } from 'react'

import { CartContext } from '../../Context/CartContext'
import CheckoutItem from '../../components/Checkout-Item/CheckoutItem'
import './checkout.styles.scss'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Produtos</span>
        </div>
        <div className='header-block'>
          <span>Descrição</span>
        </div>
        <div className='header-block'>
          <span>Quantidade</span>
        </div>
        <div className='header-block'>
          <span>Preço</span>
        </div>
        <div className='header-block'>
          <span>Remover</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      })}
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  )
}

export default Checkout
