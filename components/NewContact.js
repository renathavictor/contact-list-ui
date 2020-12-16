import React, { useState, useContext, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'

import AlertContext from '../context/alert/alertContext'
import ListContext from '../context/list/listContext'
import ContactContext from '../context/contact/contactContext'
import AuthContext from '../context/auth/authContext'

import Form from './styles/Form'

const NewContact = () => {
  const authContext = useContext(AuthContext)
  const alertContext = useContext(AlertContext)
  const listContext = useContext(ListContext)
  const contactContext = useContext(ContactContext)

  const { setAlert } = alertContext
  const { lists , error, clearCurrent } = listContext
  const { addContact } = contactContext
  const { isAuthenticated, loading } = authContext

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    list: ''
  })

  const { name, email, phone, list } = contact

  const onChangeContact = event => setContact({ ...contact, [event.target.name]: event.target.value })

  useEffect(() => {
    authContext.loadUser()

    if (!loading && !isAuthenticated) {
      Router.push('/login')
    }

    return () => {
      clearCurrent()
    }
  }, [])

  const onSubmitContact = event => {
    event.preventDefault()
    if (name === '' || list === '') {
      setAlert('O nome ou a lista não pode ficar em branco', 'danger')
    } else {
      addContact({
        ...contact
      })
      if (!error) {
        setAlert('Adicionado com sucesso!', 'success')
        setContact({
          name: '',
          email: '',
          phone: '',
          list: ''
        })
      }
    }
  }

  const phoneMask = userInput => {
    let numbers = userInput.match(/\d/g)
    let numberLength = 0
    if (numbers) {
      numberLength = numbers.join('').length
    }
    if (numberLength > 10) {
      return ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    } else {
      return ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    }
  }

  return isAuthenticated && (
    <Form
      onSubmit={onSubmitContact}
    >
      <fieldset disabled={loading} aria-busy={loading}>
        <h3>Adicionar novo contato</h3>
        <label htmlFor='list'>
          Lista
          <select name="list" id="list" onChange={onChangeContact}>
            <option  value=''>Escolha uma lista</option>
            { lists && lists.map(list => (
              <option key={list.id} value={list.id}>{list.title}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            placeholder="Digite o nome do contato"
            value={name}
            onChange={onChangeContact}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Digite o email do contato"
            value={email}
            onChange={onChangeContact}
          />
        </label>
        <label htmlFor="phone">
          Telefone
          <input
            type="text"
            name="phone"
            placeholder="Digite o telefone do contato"
            value={phone}
            onChange={onChangeContact}
            maxLength='12'
          />
        </label>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '2.5rem'
        }}>
          <Link href='/nova-lista'>
            <a>Crie uma nova lista</a>
          </Link>
          <button type="submit">Adicionar</button>
        </div>
      </fieldset>
    </Form>
  )
}

export default NewContact
