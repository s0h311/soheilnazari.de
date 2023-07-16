import '../styles/global.css'
import Layout from '../components/layout'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Kanit } from 'next/font/google'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const kanit = Kanit({
  weight: '300',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-kanit',
})

export default function App({ Component, pageProps }): AppPropsWithLayout {
  return (
    <main className={`${kanit.variable} font-kanit`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
