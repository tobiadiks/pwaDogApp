import type { AppProps } from 'next/app'
import {Analytics} from '@vercel/analytics/react'
import '../asset/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  
const AnyComponent = Component as any;
 return(
 <>
  <Analytics/>
  <AnyComponent {...pageProps} />;

  </>
  )
}

export default MyApp
