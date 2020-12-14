import App from 'next/app'
import { Provider } from 'react-redux'

import Page from '../components/Page'
// import store from '../store/configureStore'
import AuthState from '../context/auth/AuthState'
import ListState from '../context/list/ListState'
import ContactState from '../context/contact/contactState'
import AlertState from '../context/alert/AlertState'
import setAuthToken from '../utils/setAuthToken'

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (typeof window !== 'undefined' && localStorage) {
      localStorage.token && setAuthToken(localStorage.token)
    }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    //  this exposes the query to the user
    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {

    const { Component, pageProps } = this.props

    return (
      <AuthState>
        <AlertState>
          <ListState>
            <ContactState>
              <Page>
                <Component { ...pageProps } />
              </Page>
            </ContactState>
          </ListState>
        </AlertState>
      </AuthState>
    )
  }
}

export default MyApp
