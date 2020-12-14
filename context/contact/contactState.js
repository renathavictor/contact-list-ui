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

  // Add Contact
  const addContact = async contact => {
    console.log('aqui contact ', contact)
    try {
      const res = await api.post(`/lists/${contact.id}/contacts`, contact)
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

  // Delete Contact
  const deleteContact = async id => {
    // try {
    //   await api.delete(`/api/contacts/${id}`)

    //   dispatch({
    //     type: DELETE_CONTACT,
    //     payload: id
    //   })
    // } catch (err) {
    //   dispatch({
    //     type: CONTACT_ERROR,
    //     payload: err.response.msg
    //   })
    // }
  }

  // Update Contact
  const updateContact = async contact => {
    // try {
    //   const res = await api.put(
    //     `/api/contacts/${contact._id}`,
    //     contact
    //   )

    //   dispatch({
    //     type: UPDATE_CONTACT,
    //     payload: res.data
    //   })
    // } catch (err) {
    //   dispatch({
    //     type: CONTACT_ERROR,
    //     payload: err.response.msg
    //   })
    // }
  }

  // Clear Contacts
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS })
  }

  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT_CONTACT, payload: contact })
  }

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT_CONTACT })
  }

  // Filter Contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text })
  }

  // Clear Filter
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
        setCurrent,
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