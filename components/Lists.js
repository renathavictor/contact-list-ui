import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { VscTrash, VscEdit } from 'react-icons/vsc'
import Router from 'next/router'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import AlertContext from '../context/alert/alertContext'
import AuthContext from '../context/auth/authContext'
import ListContext from '../context/list/listContext'
import ContactLists from './ContactLists'

const ContainerList = styled.div`
  ul {
    min-width: 400px;
    margin-top: 6rem;
    li {
      list-style: none;
      border: 1px solid ${props => props.theme.lightgrey};
      padding: 1.5rem;
      border-radius: 3px;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      &:hover {
        background-color:  ${props => props.theme.lightgrey};
      }
      p:first-of-type {
        cursor: pointer;
      }
      svg {
        cursor: pointer;
        transition: transform .2s;
        &:first-of-type {
          fill: ${props => props.theme.grey};
        }
        &:last-of-type {
          fill: ${props => props.theme.danger};
        }
        &:hover {
          transform: scale(1.5);
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
  const alertContext = useContext(AlertContext)
  const listContext = useContext(ListContext)

  const { setAlert } = alertContext
  const { isAuthenticated, loading } = authContext

  const { lists, getLists, setCurrent, current, deleteList, updateList, error, clearCurrent } = listContext

  // const [selectList, setSelectList] = useState(null)
  const [openDelete, setOpenDelete] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [listToDelete, setListToDelete] = useState({})
  const [listToEdit, setListToEdit] = useState({})

  useEffect(() => {
    authContext.loadUser()
    getLists()

    if (!loading && !isAuthenticated) {
      Router.push('/login')
    }

    return () => {
      clearCurrent()
    }
  }, [])

  useEffect(() => {
    lists && setCurrent(lists[0])
  }, [lists])

  const handleClickList = e => {
    console.log('clicou na lista', e.target.id)
    const id = e.target.id
    const listFilter = lists.filter(list => String(list.id) === id)[0]
    listFilter && setCurrent(listFilter)
  }

  const handleOpenDelete = list => {
    setOpenDelete(true)
    setListToDelete(list)
  }

  const handleCloseDelete = () => {
    setOpenDelete(false)
  }

  const handleDeleteList = () => {
    console.log('delete lista ', listToDelete.id)
    deleteList(listToDelete.id)
    if (!error) {
      setAlert('Lista deletada.', 'success')
      setOpenDelete(false)
    } else {
      console.error(error)
      setAlert(error, 'danger')
    }
  }

  const handleOpenEdit = list => {
    setOpenEdit(true)
    setListToEdit(list)
  }

  const handleCloseEdit = () => {
    setOpenEdit(false)
  }

  const handleEditList = () => {
    console.log('Edit lista ', listToEdit.id)
    updateList({
      id: listToEdit.id,
      ...listToEdit
    })
    if (!error) {
      setOpenEdit(false)
    } else {
      console.error(error)
      setAlert(error, 'danger')
    }
  }

  const onChange = event => setListToEdit({ ...listToEdit, [event.target.name]: event.target.value })

  console.log('current ', current)
  return isAuthenticated && (
    <>
      <ContainerList>
        <ul>
        { lists && lists.map(list => (
            <li key={list.id} className={'list-title'}>
              <p style={{ width: '80%' }} onClick={handleClickList} id={list.id}>{list.title}</p>
              <p>
                <VscEdit style={{ marginRight: '1rem' }} onClick={() => handleOpenEdit(list)} />
                <VscTrash value={list.id} onClick={()=> handleOpenDelete(list)} />
              </p>
            </li>
          ))}
        </ul>
        { current &&
          <ContactLists list={current} />
        }
      </ContainerList>
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{`Deletar lista - ${listToDelete.title}?`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Atenção, ao deletar a lista, todos os contatos da lista também serão deletados.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDelete} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDeleteList} color="primary" autoFocus>
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{`Editar nome da lista - ${listToEdit.title}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <input type='text' name='title' value={listToEdit.title} onChange={onChange} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseEdit} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleEditList} color="primary" autoFocus>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Lists
