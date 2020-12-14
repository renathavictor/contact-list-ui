import React, { useReducer } from 'react'

import api from '../../utils/api'
import ListContext from './listContext'
import listReducer from './listReducer'

import {
  GET_LISTS,
  ADD_LIST,
  DELETE_LIST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LIST,
  FILTER_LISTS,
  CLEAR_LISTS,
  CLEAR_FILTER,
  LIST_ERROR
} from '../types'

const ListState = props => {
  const initialState = {
    lists: null,
    current: null,
    filtered: null,
    error: null
  }

  const [state, dispatch] = useReducer(listReducer, initialState)

  const getLists = async () => {
    try {
      const res = await api.get('/lists')
      dispatch({
        type: GET_LISTS,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: LIST_ERROR,
        payload: err.response.msg
      })
    }
  }

  const addList = async list => {
    try {
      const res = await api.post('/lists', list)

      dispatch({
        type: ADD_LIST,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: LIST_ERROR,
        payload: err.response.msg
      })
    }
  }

  const deleteList = async id => {
    try {
      await api.delete(`/lists/${id}`)

      dispatch({
        type: DELETE_LIST,
        payload: id
      })
    } catch (err) {
      dispatch({
        type: LIST_ERROR,
        payload: err.response.msg
      })
    }
  }

  const updateList = async list => {
    console.log('list ---- ', list)
    try {
      const res = await api.put(
        `/lists/${list.id}`,
        list
      )
      console.log(res)
      dispatch({
        type: UPDATE_LIST,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: LIST_ERROR,
        payload: err.response.msg
      })
    }
  }

  const clearLists = () => {
    dispatch({ type: CLEAR_LISTS })
  }

  const setCurrent = list => {
    dispatch({ type: SET_CURRENT, payload: list })
  }

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  const filterLists = text => {
    dispatch({ type: FILTER_LISTS, payload: text })
  }

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <ListContext.Provider
      value={{
        lists: state.lists,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addList,
        deleteList,
        setCurrent,
        clearCurrent,
        updateList,
        filterLists,
        clearFilter,
        getLists,
        clearLists
      }}
    >
      {props.children}
    </ListContext.Provider>
  )
}

export default ListState
