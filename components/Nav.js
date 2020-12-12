import React from 'react'
import Link from 'next/link'

import NavStyled from './styles/NavStyles'

const Nav = () => {
  return (
    <NavStyled>
      <Link href='/minhas-listas'><a>listas</a></Link>
      <Link href='/login'><a>login</a></Link>
      <Link href='/me'><a>account</a></Link>
    </NavStyled>
  )
}

export default Nav
