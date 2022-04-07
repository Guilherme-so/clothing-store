import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import FormInput from '../../components/Form/Form'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button'

import './entrar.styles.scss'
import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action'

const defaultFormFields = {
  email: '',
  senha: '',
}

const Entrar = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, senha } = formFields

  const dispatch = useDispatch()

  const EntrarComGoogle = async () => {
    dispatch(googleSignInStart())
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      dispatch(emailSignInStart(email, senha))
      setFormFields(defaultFormFields)
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Senha incorreta')
          break
        case 'auth/user-not-found':
          alert('Usuario não cadastrado')
          break
        default:
          console.log(error)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className='entrar'>
      <h2>Ja tem um conta</h2>
      <span>Entre com email e senha</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          name='email'
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label='Senha'
          type='password'
          required
          name='senha'
          value={senha}
          onChange={handleChange}
        />
        <div className='buttons'>
          <Button type='submit'>Entrar</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={EntrarComGoogle}
          >
            Entrar com Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Entrar
