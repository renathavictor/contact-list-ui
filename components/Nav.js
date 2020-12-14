import React, { Fragment, useContext } from 'react'
import Link from 'next/link'
import { VscSignOut } from 'react-icons/vsc'

import AuthContext from '../context/auth/authContext'
import ContactContext from '../context/contact/contactContext'
import ListContext from '../context/list/listContext'
import NavStyled from './styles/NavStyles'

const Nav = () => {
  const authContext = useContext(AuthContext)
  const contactContext = useContext(ContactContext)
  const listContext = useContext(ListContext)

  const { isAuthenticated, logout } = authContext
  const { deleteContact, updateContact, error } = contactContext
  const { clearCurrent } = listContext

  const onLogout = () => {
    logout()
  }
  const authLinks = (
    <Fragment>
      <Link href='/'><a>home</a></Link>
      <Link href='/minhas-listas'><a>listas</a></Link>
      {/* <Link href='/me'><a>account</a></Link> */}
      <Link href='#!'><a onClick={onLogout}><VscSignOut /><span className='hide-sm'>logout</span></a></Link>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <Link href='/login'><a>login</a></Link>
      <Link href='/registrar'><a>registrar</a></Link>
    </Fragment>
  )

  return (
    <NavStyled>
      { isAuthenticated ? authLinks : guestLinks }
    </NavStyled>
  )
}

export default Nav
