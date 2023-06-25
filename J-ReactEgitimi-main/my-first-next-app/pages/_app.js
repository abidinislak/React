import '@/styles/globals.css';
import Layout from '../Layouts/layout';

export default function App({ Component, pageProps }) {
  return (
    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>
    <Component {...pageProps} />
  )
}
