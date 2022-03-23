import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from '../../assets/crown.svg?component'
import { UserContext } from '../../Context/UserContext'
import { sair } from '../../Utilities/Firebase/firebase'
import CartIcon from '../../components/Cart-icon/CartIcon'
import CartDropdown from '../../components/Cart-dropdown/CartDropdown'
import { CartContext } from '../../Context/CartContext'

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isModalOpen } = useContext(CartContext)

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={sair}>
              SAIR
            </NavLink>
          ) : (
            <NavLink to='auth'>ENTRAR</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isModalOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation
