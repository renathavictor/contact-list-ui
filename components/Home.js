import React, { useContext, useEffect } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import { VscAdd } from 'react-icons/vsc'

import AuthContext from '../context/auth/authContext'
import Lists from './Lists'

const ButtonHome = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;

  button {
    padding: 1.5rem;
    background-color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.primary};
    border-radius: 3px;
    color: ${props => props.theme.offWhite};
    cursor: pointer;
    &:hover {
      background-color:  ${props => props.theme.offWhite};
      border: 1px solid ${props => props.theme.primary};
      color: ${props => props.theme.primary};
    }
  }
`

const ContainerHome = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;
`

const Home = () => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated, loading, user } = authContext

  useEffect(() => {
    authContext.loadUser()
    if (!loading && !isAuthenticated) {
      Router.push('/login')
    }

  }, [])

  return isAuthenticated ? (
    <div>
      <h3>Olá, { user && user?.user.name }</h3>
      <ButtonHome>
        <button onClick={() => Router.push('/nova-lista')}>
          <VscAdd /> CRIAR LISTA
        </button>
        <button onClick={() => Router.push('/novo-contato')}>
          <VscAdd /> NOVO CONTATO
        </button>
      </ButtonHome>
      <Lists />
    </div>
  ) : <div>Sem permissão para acessar essa página</div>
}

export default Home
