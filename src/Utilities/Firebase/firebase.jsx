import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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
const googleProvider = new GoogleAuthProvider()

//Customização do provedor do google
googleProvider.getCustomParameters({
  //selecione uma conta do google
  prompt: 'select-account',
})

//autenticaçao do google
export const auth = getAuth()

//entrar com Popup que pega a autenticaçao do google e a conta selecionada
export const EntrarWithGooglePopup = () => signInWithPopup(auth, googleProvider)
//entrar com google redirect
export const EntrarWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

//firestore database
export const db = getFirestore()

//criar usuario com conta ja auth do google
export const createUserDocumentFromAuth = async (
  userAuth,
  adtionalInfo = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  //se usuario não existe, cria um usuario
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...adtionalInfo,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  //se usuario existe, retorna o usuario
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, senha) => {
  if (!senha || !email) return
  return await createUserWithEmailAndPassword(auth, email, senha)
}

export const entrarAuthUserWithEmailAndPassword = async (email, senha) => {
  if (!senha || !email) return
  return await signInWithEmailAndPassword(auth, email, senha)
}

export const sair = async () => await signOut(auth)

//auto ver se usuario entrou ou saiu
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)
