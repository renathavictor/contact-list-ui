import React, { useReducer } from 'react'

import api from '../../utils/api'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT_CONTACT,
  CLEAR_CURRENT_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER_CONTACT,
  CONTACT_ERROR
} from '../types'

const ContactState = props => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Get Contacts
  const getContacts = async () => {
    // try {
    //   const res = await api.get('/api/contacts')

    //   dispatch({
    //     type: GET_CONTACTS,
    //     payload: res.data
    //   })
    // } catch (err) {
    //   dispatch({
    //     type: CONTACT_ERROR,
    //     payload: err.response.msg
    //   })
    // }
  }

  const addContact = async contact => {
    console.log('aqui contact ', contact)
    try {
      const res = await api.post(`/lists/${contact.list}/contacts`, contact)
      console.log('res ', res)
      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response
      })
    }
  }

  const deleteContact = async ({ list_id, contact_id }) => {
    try {
      await api.delete(`/lists/${list_id}/contacts/${contact_id}`)

      dispatch({
        type: DELETE_CONTACT,
        payload: contact_id
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: CONTACT_ERROR,
        payload: 'Erro ao deletar contato'
      })
    }
  }

  const updateContact = async ({ list_id, contact }) => {
    try {
      await api.put(
        `/lists/${list_id}/contacts/${contact.id}`,
        contact
      )

      dispatch({
        type: UPDATE_CONTACT,
        payload: { list_id, contact }
      })
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: 'Erro ao atualizar o contato'
      })
    }
  }

  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS })
  }

  const setCurrentContact = contact => {
    dispatch({ type: SET_CURRENT_CONTACT, payload: contact })
  }

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT_CONTACT })
  }

  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text })
  }

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER_CONTACT })
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        setCurrentContact,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        getContacts,
        clearContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState