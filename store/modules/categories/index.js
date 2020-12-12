import { createAction, createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import sagas from './sagas'

export const findCategories = createAction('FIND_CATEGORIES')
export const findCategoriesSuccessful = createAction('FIND_CATEGORIES_SUCCESSFUL')
export const findCategoriesFailure = createAction('FIND_CATEGORIES_FAILURE')
// export const FIND_CATEGORY_PRODUCTS = createAction('FIND_CATEGORY_PRODUCTS')
// export const FIND_CATEGORY_PRODUCTS_SUCCESSFUL = createAction('FIND_CATEGORY_PRODUCTS_SUCCESSFUL')
// export const FIND_CATEGORY_PRODUCTS_FAILURE = createAction('FIND_CATEGORY_PRODUCTS_FAILURE')

const initialState = {
  items: [],
  loading: true,
  error: null,
  pagination: {
    page: 1,
    total_pages: 0,
    total_results: 0
  }
}

const categories = createReducer(initialState, {
  [findCategories]: (state, action) => ({
    loading: true
  }),
  [findCategoriesSuccessful]: (state, action) => {
    console.log('actions ', action)
    return ({
    items: action.payload.results,
    pagination: { page: action.payload.page, total_pages: action.payload.total_pages, total_results: action.payload.total_results },
    loading: false
  })},
  [findCategoriesFailure]: (state, action) => ({
    isFetching: false,
    error: false,
    errorMessage: action.payload
  })
})

const reducers = combineReducers({
  categories
})

export {
  sagas,
  reducers
}