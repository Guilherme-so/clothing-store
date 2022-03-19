import { useContext } from 'react'
import Bag from '../../assets/shopping-bag.svg?component'
import { CartContext } from '../../Context/CartContext'
import './cartIcon.scss'

const CartIcon = () => {
  const { isModalOpen, setIsModalOpen } = useContext(CartContext)

  const handleToogle = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className='cart-icon-container' onClick={handleToogle}>
      <Bag className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon
