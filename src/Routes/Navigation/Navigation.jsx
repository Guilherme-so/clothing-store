import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from '../../assets/crown.svg?component'
import { UserContext } from '../../Context/UserContext'
import { sair } from '../../Utilities/Firebase/firebase'
import CartIcon from '../../components/Cart-icon/CartIcon'
import CartDropdown from '../../components/Cart-dropdown/CartDropdown'
import { CartContext } from '../../Context/CartContext'
import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isModalOpen } = useContext(CartContext)

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='links-container'>
          <Link className='link' to='shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='link' onClick={sair}>
              SAIR
            </span>
          ) : (
            <Link className='link' to='auth'>
              ENTRAR
            </Link>
          )}
          <CartIcon />
        </div>
        {isModalOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
