import type { AppProps } from 'next/app'
import { WalletProvider } from '../context/WalletContext'
import '../styles/globals.css'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <Component {...pageProps} />
    </WalletProvider>
  )
}

export default MyApp