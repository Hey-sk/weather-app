import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { Roboto } from 'next/font/google'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['300','400','500'] })

export default function App({ Component, pageProps }) {
  return( 
  <Layout>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
  </Layout>
  )
}
