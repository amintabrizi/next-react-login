import { Provider } from 'react-redux'
import { useStore } from '../redux/store/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/globals.css';
import Layout from './../components/layout/layout'


export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Layout><Component {...pageProps} /></Layout>
    </Provider>
  )
}
