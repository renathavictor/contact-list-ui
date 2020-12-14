import React, { useState, useContext, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'

import AlertContext from '../context/alert/alertContext'
import ListContext from '../context/list/listContext'
import ContactContext from '../context/contact/contactContext'

import Form from './styles/Form'

const NewList = () => {
  const alertContext = useContext(AlertContext)
  const listContext = useContext(ListContext)
  const contactContext = useContext(ContactContext)

  const { setAlert } = alertContext
  const { current , addList, error, clearCurrent } = listContext
  const { addContact } = contactContext

  const [list, setList] = useState({
    title: ''
  })
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const { title } = list
  const { name, email, phone } = contact

  const onChange = event => setList({ ...list, [event.target.name]: event.target.value })
  const onChangeContact = event => setContact({ ...contact, [event.target.name]: event.target.value })

  const onSubmit = event => {
    event.preventDefault()
    if (title === '') {
      setAlert('Preencha o nome da lista', 'danger')
    } else {
      addList({
        ...list
      })
    }
  }

  useEffect(() => {
    return () => {
      clearCurrent()
    }
  }, [])

  console.log('current ', current)

  const onSubmitContact = event => {
    event.preventDefault()
    addContact({
      id: current.id,
      ...contact
    })
    if (!error) {
      setAlert('Adicionado com sucesso!', 'success')
      setContact({
        name: '',
        email: '',
        phone: ''
      })
    }
  }

  return (
    <>
      { !current ? <Form
        onSubmit={onSubmit}
      >
        <fieldset>
          <h3>Crie uma nova lista</h3>
          <label htmlFor="title">
            Nome
            <input
              type="text"
              name="title"
              placeholder="Digite o nome da lista"
              value={title}
              onChange={onChange}
            />
          </label>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '2.5rem'
          }}>
            <Link href='/login'>
              <a>Adicione contato em vez disso</a>
            </Link>
            <button type="submit">Criar</button>
          </div>
        </fieldset>
      </Form>
      : <Form
        onSubmit={onSubmitContact}
      >
        <fieldset>
          <h3>Adicionar contato na lista: {current.title}</h3>
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
            />
          </label>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '2.5rem'
          }}>
            <Link href='/login'>
              <a>Adicione contato em vez disso</a>
            </Link>
            <button type="submit">Adicionar</button>
          </div>
        </fieldset>
      </Form>}
    </>
  )
}

export default NewList
