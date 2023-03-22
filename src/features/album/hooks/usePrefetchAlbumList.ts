import { useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'
import { cacheKey } from '~/features/album/hooks/useAlbumList'
import { fetchAlbums } from '~/features/album/client/fetchAlbums'

export const usePrefetchAlbumList = () => {
  const queryClient = useQueryClient()

  return useCallback(async () => {
    await queryClient.prefetchQuery(cacheKey, async () => {
      return await fetchAlbums()
    })
  }, [queryClient])
}
