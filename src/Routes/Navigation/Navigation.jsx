import { Outlet, Link } from 'react-router-dom'
import Logo from '../../assets/crown.svg?component'

import './navigation.styles.scss'

const Navigation = () => {
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
          <Link className='link' to='auth'>
            ENTRAR
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
