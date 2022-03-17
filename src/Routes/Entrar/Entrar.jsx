import {
  EntrarWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../Utilities/Firebase/firebase'

import Cadastrar from '../../components/Cadastrar/Cadastrar'

const Entrar = () => {
  const EntrarGoogleUser = async () => {
    const response = await EntrarWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(response.user)
    console.log(userDocRef)
  }

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={EntrarGoogleUser}>Entrar com Google</button>
      <Cadastrar />
    </div>
  )
}

export default Entrar
