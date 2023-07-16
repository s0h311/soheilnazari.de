import '../styles/global.css'
import Layout from '../components/layout'
import { Kanit } from 'next/font/google'

const kanit = Kanit({
  weight: '300',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-kanit',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${kanit.variable} font-kanit grid place-items-center`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
