import App from 'next/app'
import { Provider } from 'react-redux'

import Page from '../components/Page'
import store from '../store/configureStore'

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

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
      <Provider store={store}>
        <Page>
          <Component { ...pageProps } />
        </Page>
      </Provider>
    )
  }
}

export default MyApp