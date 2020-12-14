import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { VscTrash, VscEdit } from 'react-icons/vsc'

import AuthContext from '../context/auth/authContext'
import ListContext from '../context/list/listContext'
import ContactLists from './ContactLists'

const ContainerList = styled.div`
  ul {
    min-width: 400px;
    li {
      list-style: none;
      border: 1px solid ${props => props.theme.lightgrey};
      padding: 1.5rem;
      border-radius: 3px;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      p:first-of-type {
        cursor: pointer;
      }
      svg {
        cursor: pointer;
        &:first-of-type {
          fill: ${props => props.theme.grey};
        }
        &:last-of-type {
          fill: ${props => props.theme.danger};
        }
      }
    }

    @media(max-width: 750px) {
      min-width: 300px;
    }
  }

  div:last-of-type {
    min-width: 400px;
  }
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  margin-top: 5rem;
`

const Lists = () => {
  const authContext = useContext(AuthContext)

  const listContext = useContext(ListContext)
  const { lists, getLists, setCurrent } = listContext

  const [selectList, setSelectList] = useState(null)

  useEffect(() => {
    // authContext.loadUser()

    getLists()
  }, [])

  const handleClickList = e => {
    console.log('clicou na lista', e.target.id)
    const id = e.target.id
    const listFilter = lists.filter(list => String(list.id) === id)[0]
    listFilter && setSelectList(listFilter)
  }

  console.log('selectList ', selectList)
  return (
    <ContainerList>
      <ul>
      { lists && lists.map(list => (
          <li key={list.id} className='list-title'>
            <p onClick={handleClickList} id={list.id}>{list.title}</p>
            <p><VscEdit style={{ marginRight: '1rem' }} /><VscTrash /></p>
          </li>
        ))}
      </ul>
      { selectList &&
        <ContactLists list={selectList} />
      }
    </ContainerList>
  )
}

export default Lists
