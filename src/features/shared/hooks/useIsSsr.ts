import { createContext, useContext } from 'react'

export const isSsrContext = createContext(true)

export const useIsSsr = () => {
  return useContext(isSsrContext)
}
