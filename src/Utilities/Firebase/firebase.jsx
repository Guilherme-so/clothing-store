import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC-YicIyQl5VSTlzcH5t0qtJnxp_D8oPMs',
  authDomain: 'cop-store.firebaseapp.com',
  projectId: 'cop-store',
  storageBucket: 'cop-store.appspot.com',
  messagingSenderId: '368568733584',
  appId: '1:368568733584:web:522a693f292410e9116d15',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

//Provedor do Google
const provider = new GoogleAuthProvider()

//Customização do provedor do google
provider.getCustomParameters({
  //selecione uma conta do google
  prompt: 'select-account',
})

//autenticaçao do google
export const auth = getAuth()

//entrar com Popup que pega a autenticaçao do google e a conta selecionada
export const EntrarWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)
  //se usuario não existe
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  //se usuario existe
  return userDocRef
}
