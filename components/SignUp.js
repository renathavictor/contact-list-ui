import React from 'react'
import Link from 'next/link'

import Form from './styles/Form'
import Error from './ErrorMessage'

const SignUp = () => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  return (
    <>
      {/* <CssBaseline /> */}
      <Form
        onSubmit={async event => {
          event.preventDefault()
          console.log('submit')
        }}      
      >
        <fieldset disabled={loading} aria-busy={loading}>
          <h2>Crie sua conta no Contact Keeper</h2>
          <Error error={error} />
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              // value={this.state.name}
              // onChange={this.saveToState}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              // value={this.state.email}
              // onChange={this.saveToState}
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              placeholder="Digite uma senha"
              // value={this.state.password}
              // onChange={this.saveToState}
            />
          </label>
          <label htmlFor="passwordConfirm">
            Confirmar senha
            <input
              type="passwordConfirm"
              name="passwordConfirm"
              placeholder="Confirme a senha"
              // value={this.state.password}
              // onChange={this.saveToState}
            />
          </label>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '2.5rem'
          }}>
            <Link href='/login'>
              <a>Faça login em vez disso</a>
            </Link>
            <button type="submit">Cadastrar!</button>
          </div>
        </fieldset>
        {/* <Typography 
          component="div" 
          style={{
            marginTop: '5rem', 
            border: '1px solid #c6c6c6', 
            height: '60vh'
          }}
        > */}

        {/* </Typography> */}
      </Form>
    </>
  )
}

export default SignUp
