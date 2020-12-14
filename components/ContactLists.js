import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { VscAccount, VscDeviceMobile, VscMail,VscEdit, VscTrash } from "react-icons/vsc"

// import ListContext from '../context/list/listContext'

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
`

const ContactLists = ({ list }) => {
  // const listContext = useContext(ListContext)
  // const { lists, getLists, setCurrent } = listContext
  console.log(list)
  useEffect(() => {
    // getLists()
    // return () => {
    //   cleanup
    // }
  }, [])
  // console.log('lists ', lists)
  return (
    <div>
      <h3>{ list.title }</h3>
      {
        list && list.contacts.map(contact => (
          <CardContact key={contact.id}>
            <p><VscAccount />{contact.name}</p>
            <p><VscDeviceMobile />{contact.phone}</p>
            <p><VscMail />{contact.email}</p>
            <p>
              <button>
                <VscEdit />Editar
              </button>
              <button>
                <VscTrash />Remover
              </button>
            </p>
          </CardContact>
        ))
      }
    </div>
  )
}

export default ContactLists
