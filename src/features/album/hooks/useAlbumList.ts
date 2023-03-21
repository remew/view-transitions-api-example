import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchAlbums } from '~/features/album/client/fetchAlbums'
import { useCallback } from 'react'

const cacheKey = ['/api/albums'] as const

export const useAlbumList = () => {
  return useQuery(
    cacheKey,
    async () => {
      return await fetchAlbums()
    },
    {
      suspense: true,
    },
  )
}

export const useInvalidateAlbumList = () => {
  const queryClient = useQueryClient()

  return useCallback(async () => {
    await queryClient.invalidateQueries(cacheKey)
  }, [queryClient])
}
