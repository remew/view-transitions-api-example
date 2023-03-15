import { createContext, useContext } from 'react'

export const viewTransitionContext = createContext<ViewTransition | null>(null)

export const useCurrentViewTransition = () => {
  return useContext(viewTransitionContext)
}
