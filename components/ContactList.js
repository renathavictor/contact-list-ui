import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { findCategories } from '../store/modules/categories'

const ContactList = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => {
    console.log('state ', state)
    return state.categories
  })

  useEffect(() => {
    dispatch(findCategories())
  }, [dispatch])

  return (
    <div>
      
    </div>
  )
}

export default ContactList
