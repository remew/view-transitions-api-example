import { useEffect, useRef, useState } from 'react'
import '~/styles/globals.css'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Deferred } from '~/features/shared/libs/Deferred'
import { isSsrContext } from '~/features/shared/hooks/useIsSsr'
import { viewTransitionContext } from '~/features/shared/hooks/useCurrentViewTransition'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  const [currentViewTransition, setViewTransition] = useState<ViewTransition | null>(null)
  const deferredRef = useRef<Deferred | null>()
  const { events } = useRouter()

  useEffect(() => {
    const onRouteChangeStart = () => {
      console.log('routeChangeStart')
      console.log('deferredRef.current', deferredRef.current)
      const d = new Deferred()
      deferredRef.current = d
      if (document.startViewTransition) {
        const viewTransition = document.startViewTransition(async () => {
          await d.promise
        })
        setViewTransition(viewTransition)
      }
    }
    const onRouteChangeComplete = () => {
      console.log('routeChangeComplete')
      console.log('deferredRef.current', deferredRef.current)
      deferredRef.current?.resolve()
    }
    events.on('routeChangeStart', onRouteChangeStart)
    events.on('routeChangeComplete', onRouteChangeComplete)
    return () => {
      events.off('routeChangeStart', onRouteChangeStart)
      events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  const [isSsr, setIsSsr] = useState(true)
  useEffect(() => {
    setIsSsr(false)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <isSsrContext.Provider value={isSsr}>
        <viewTransitionContext.Provider value={currentViewTransition}>
          <Component {...pageProps} />
        </viewTransitionContext.Provider>
      </isSsrContext.Provider>
    </QueryClientProvider>
  )
}
