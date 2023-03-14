import { useEffect, useRef } from 'react'
import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Deferred } from '~/libs/Deferred'

export default function App({ Component, pageProps }: AppProps) {
  const deferredRef = useRef<Deferred | null>()
  const { events } = useRouter()

  useEffect(() => {
    events.on('routeChangeStart', () => {
      const d = new Deferred()
      deferredRef.current = d
      if (document.startViewTransition) {
        document.startViewTransition(async () => {
          await d.promise
        })
      }
    })
    events.on('routeChangeComplete', () => {
      deferredRef.current?.resolve()
    })
  }, [])

  return <Component {...pageProps} />
}
