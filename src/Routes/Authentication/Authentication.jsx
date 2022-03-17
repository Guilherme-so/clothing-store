import Cadastrar from '../../components/Cadastrar/Cadastrar'
import Entrar from '../../components/Entrar/Entrar'
import './authentication.styles.scss'

const Authentication = () => {
  return (
    <div className='authentication'>
      <Entrar />
      <Cadastrar />
    </div>
  )
}

export default Authentication
