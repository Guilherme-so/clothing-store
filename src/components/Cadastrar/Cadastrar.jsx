import React, { useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../Utilities/Firebase/firebase'
import FormInput from '../Form/Form'
import Button from '../Button/Button'
import './cadastrar.styles.scss'

const cadastroForm = {
  nome: '',
  email: '',
  senha: '',
  comfirmeSenha: '',
}

const Cadastrar = () => {
  const [form, setForm] = useState(cadastroForm)
  const { nome, email, senha, comfirmeSenha } = form

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (senha !== comfirmeSenha) {
      alert('Usuario e senha não combina')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, senha)
      await createUserDocumentFromAuth(user, { nome })
      setForm(cadastroForm)
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email ja ja em uso')
      } else {
        console.log('Ouve um erro na criação de usuaria', error)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  return (
    <div className='cadastre'>
      <h2>Não tem uma conta?</h2>
      <span>Cadastre-se com email e senha</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Nome'
          type='text'
          name='nome'
          value={nome}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Email'
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Senha'
          type='password'
          name='senha'
          value={senha}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Comfirme Senha'
          type='password'
          name='comfirmeSenha'
          value={comfirmeSenha}
          onChange={handleChange}
          required
        />
        <Button>Cadastrar</Button>
      </form>
    </div>
  )
}
export default Cadastrar
