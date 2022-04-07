import { Outlet } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import CartIcon from '../../components/Cart-icon/CartIcon'
import CartDropdown from '../../components/Cart-dropdown/CartDropdown'

import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'
import { signOutStart } from '../../store/user/user.action'

import Logo from '../../assets/crown.svg?component'

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles'

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  const dispatch = useDispatch()

  const signOutUser = () => dispatch(signOutStart())

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SAIR
            </NavLink>
          ) : (
            <NavLink to='auth'>ENTRAR</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation
