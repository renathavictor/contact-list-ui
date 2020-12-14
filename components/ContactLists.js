import React, { useContext, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { VscAccount, VscDeviceMobile, VscMail,VscEdit, VscTrash } from "react-icons/vsc"
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import AlertContext from '../context/alert/alertContext'
import ContactContext from '../context/contact/contactContext'
import ListContext from '../context/list/listContext'

const ContainerList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;
`

const CardContact = styled.div`
  border-radius: 3px;
  border: 1px solid ${props => props.theme.secundary};
  background-color: ${props => props.theme.lightgrey};
  margin-bottom: 1rem;
  padding: 1rem 2rem;

  svg {
    margin-right: 1rem;
  }
  button {
    cursor: pointer;
    padding: 0.4rem;
  }
  button:first-of-type {
    margin-right: 1rem;
    color: ${props => props.theme.offWhite};
    background-color: ${props => props.theme.secundary};
    border-radius: 3px;
    border-color: ${props => props.theme.secundary};
    &:hover {
      color: ${props => props.theme.secundary};
      background-color: ${props => props.theme.offWhite};
      border-radius: 3px;
      border-color: ${props => props.theme.secundary};
    }
  }

  button:last-of-type {
    color: ${props => props.theme.offWhite};
    background-color: ${props => props.theme.danger};
    border-radius: 3px;
    border-color: ${props => props.theme.danger};
    &:hover {
      color: ${props => props.theme.danger};
      background-color: ${props => props.theme.offWhite};
      border-radius: 3px;
      border-color: ${props => props.theme.danger};
    }
  }

  input {
    margin: 10px auto;
    height: 32px;
    padding-left: 1rem;
  }
`

const ContactLists = ({ list }) => {
  const contactRef = useRef(null)
  const contactContext = useContext(ContactContext)
  const alertContext = useContext(AlertContext)
  const listContext = useContext(ListContext)

  const { setAlert } = alertContext
  const { deleteContact, updateContact, error } = contactContext
  const { setCurrent } = listContext

  const [contactToDelete, setContactToDelete] = useState({})
  const [contactToEdit, setContactToEdit] = useState(null)
  const [openDelete, setOpenDelete] = useState(false)

  const handleOpenDelete = contact => {
    setOpenDelete(true)
    setContactToDelete(contact)
  }

  const handleCloseDelete = () => {
    setOpenDelete(false)
  }

  const handleOpenEdit = contact => {
    console.log('handle edit ', contact)
    setContactToEdit(contact)
    contactRef.current = contact.id
  }

  const handleCloseEdit = contact => {
    setContactToEdit(null)
  }


  const handleEdit = contact => {
    console.log('HANDLE EDIT')
    if (contact.name === '') {
      setAlert('O nome não pode ficar em branco', 'danger')
    } else {
      console.log('contactToEdit ', contactToEdit)
      updateContact({
        list_id: list.id,
        contact: contactToEdit
      })
      if (!error) {
        setContactToEdit(null)
        list = { ...list, contacts: list.contacts.map(contact => contact.id !== contactToEdit.id ? contact : Object.assign({}, contact, contactToEdit))}
        setCurrent(list)
      }
    }

  }

  const handleDelete = () => {
    deleteContact({
      list_id: list.id,
      contact_id: contactToDelete.id
    })
    if (!error) {
      setAlert('Contato deletado.', 'success')
      list = { ...list, contacts: list.contacts.filter(contact => contact.id !== contactToDelete.id)}
      setCurrent(list)
      setOpenDelete(false)
    } else {
      console.error(error)
      setAlert(error, 'danger')
    }
  }

  useEffect(() => {
    console.log('error => ', error)
  }, [error])

  const onChange = event => setContactToEdit({ ...contactToEdit, [event.target.name]: event.target.value })

  return (
    <div>
      <h3>{ list.title }</h3>
      {
        list && list.contacts.map(contact => (
          <CardContact key={contact.id}>
            { contactToEdit && contactRef.current === contact.id ? <div style={{ display: 'flex', flexFlow: 'column', margin: 'auto' }}>
              <span style={{ marginTop: '1rem' }}>
                <VscAccount />
                <input style={{ width: '85%' }} type='text' name='name' value={contactToEdit.name} onChange={onChange} />
              </span>
              <span>
                <VscDeviceMobile />
                <input style={{ width: '85%' }} type='text' name='phone' value={contactToEdit.phone} onChange={onChange} />
              </span>
              <span>
                <VscMail />
                <input style={{ width: '85%' }} type='text' name='email' value={contactToEdit.email} onChange={onChange} />
                </span>
              <div style={{ marginTop: '1rem' }}>
                <button onClick={handleEdit}>Salvar</button>
                <button onClick={handleCloseEdit}>Cancelar</button>
              </div>
            </div>
              : <div>
              <p><VscAccount />{contact.name}</p>
              <p><VscDeviceMobile />{contact.phone}</p>
              <p><VscMail />{contact.email}</p>
              <p>
                <button onClick={() => handleOpenEdit(contact)} >
                  <VscEdit />Editar
                </button>
                <button onClick={() => handleOpenDelete(contact)} >
                  <VscTrash />Remover
                </button>
              </p>
            </div>
            }
          </CardContact>
        ))
      }
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{`Deletar contato - ${contactToDelete.name}?`}</DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDelete} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ContactLists
