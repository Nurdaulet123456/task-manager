import type { AppProps } from 'next/app'

// ! import only styles

import '../styles/global.css';
import '../styles/styles.sass';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
