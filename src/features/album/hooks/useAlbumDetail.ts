import { useCallback } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchAlbumDetail } from '~/features/album/client/fetchAlbumDetail'

const getCacheKey = (slug: string) => {
  return ['/api/albums', slug] as const
}

export const useAlbumDetail = (slug: string) => {
  return useQuery(
    getCacheKey(slug),
    async () => {
      return await fetchAlbumDetail(slug)
    },
    {
      suspense: true,
    },
  )
}

export const useInvalidateAlbumDetail = (slug: string) => {
  const queryClient = useQueryClient()

  return useCallback(async () => {
    await queryClient.invalidateQueries(getCacheKey(slug))
  }, [queryClient, slug])
}
