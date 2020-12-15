import {
  GET_LISTS,
  ADD_LIST,
  DELETE_LIST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LIST,
  FILTER_LISTS,
  CLEAR_FILTER,
  LIST_ERROR,
  CLEAR_LISTS
} from '../types'

const listReducer = (state, action) => {
  switch (action.type) {
    case GET_LISTS:
      return {
        ...state,
        lists: action.payload,
        loading: false
      }
    case ADD_LIST:
      return {
        ...state,
        current: action.payload,
        lists: [action.payload, ...state.lists],
        loading: false
      }
    case UPDATE_LIST:
      return {
        ...state,
        lists: state.lists.map(list =>
          list.id === action.payload.id ? action.payload : list
        ),
        loading: false
      }
    case DELETE_LIST:

      return {
        ...state,
        lists: state.lists.filter(
          list => list.id !== action.payload
        ),
        loading: false
      }
    case CLEAR_LISTS:
      return {
        ...state,
        lists: null,
        filtered: null,
        error: null,
        current: null
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    case FILTER_LISTS:
      return {
        ...state,
        filtered: state.lists.filter(list => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return list.name.match(regex) || list.email.match(regex)
        })
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }
    case LIST_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default listReducer