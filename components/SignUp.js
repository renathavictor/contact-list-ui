import React, { useState, useContext, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'

import AlertContext from '../context/alert/alertContext'
import AuthContext from '../context/auth/authContext'
import Form from './styles/Form'

const SignUp = () => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext
  const { register, error, clearErrors, isAuthenticated } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      Router.push('/')
    }
    if (error && error.message.match(/Email has already been taken/)) {
      setAlert('Email já está em uso', 'danger')
      clearErrors()
    }
  }, [error, isAuthenticated])

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })
  const [loading, setLoading] = useState(false)

  const { name, email, password, passwordConfirm } = user

  const onChange = event => setUser({ ...user, [event.target.name]: event.target.value })

  const onSubmit = event => {
    event.preventDefault()
    if (name === '' || email === '' || password === '' || passwordConfirm === '') {
      setAlert('Por favor, digite todos com campos', 'danger')
    } else if (password !== passwordConfirm) {
      setAlert('As senhas não combinam', 'danger')
    } else if (password.length < 6 || passwordConfirm < 6) {
      setAlert('A senha deve ter no mínimo 6 caracteres', 'danger')
    } else {
      register({
        ...user
      })
    }
  }

  return (
    <>
      <Form
        onSubmit={onSubmit}
      >
        <fieldset disabled={loading} aria-busy={loading}>
          <h3>Crie sua conta no Contact Keeper</h3>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={onChange}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={email}
              onChange={onChange}
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              placeholder="Digite uma senha"
              value={password}
              onChange={onChange}
            />
          </label>
          <label htmlFor="passwordConfirm">
            Confirmar senha
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirme a senha"
              value={passwordConfirm}
              onChange={onChange}
            />
          </label>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '2.5rem'
          }}>
            <Link href='/login'>
              <a>Faça login em vez disso</a>
            </Link>
            <button type="submit">Cadastrar!</button>
          </div>
        </fieldset>
      </Form>
    </>
  )
}

export default SignUp
