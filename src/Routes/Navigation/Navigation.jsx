import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from '../../assets/crown.svg?component'
import { UserContext } from '../../Context/UserContext'
import { sair } from '../../Utilities/Firebase/firebase'
import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  console.log(currentUser)

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
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
