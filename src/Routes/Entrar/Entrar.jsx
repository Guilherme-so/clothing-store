import React from 'react'
import {
  EntrarWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../Utilities/Firebase/firebase'

const Entrar = () => {
  const logGoogleUser = async () => {
    const { user } = await EntrarWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={logGoogleUser}>Entrar com Google</button>
    </div>
  )
}

export default Entrar
