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

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'

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
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
//entrar com google redirect
export const EntrarWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

//firestore database
export const db = getFirestore()

//adicionar categoria e os dados no firestore db
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
}

//pega as categorias e produtos do firebase banco de dados
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())
}

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
  return userSnapshot
}

export const createAuthUserWithEmailAndPassword = async (email, senha) => {
  if (!senha || !email) return
  return await createUserWithEmailAndPassword(auth, email, senha)
}

export const signInAuthUserWithEmailAndPassword = async (email, senha) => {
  if (!senha || !email) return
  return await signInWithEmailAndPassword(auth, email, senha)
}

export const signOutUser = async () => await signOut(auth)

//auto ver se usuario entrou ou saiu
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}
