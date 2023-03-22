import { useEffect, useRef } from 'react'

export const useDidMount = (callback: () => Promise<void> | void) => {
  const isMountedRef = useRef(false)
  useEffect(() => {
    if (isMountedRef.current) {
      return
    }
    isMountedRef.current = true
    callback()
  }, [])
}
