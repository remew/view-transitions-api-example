import { useQuery } from '@tanstack/react-query'
import { fetchPlaylist } from '~/features/youtube-api/clients/fetchPlaylist'

type Props = {
  playlistId: string
}

export const PlaylistTitle = ({ playlistId }: Props) => {
  const { data } = useQuery(
    ['/playlist', playlistId],
    async () => {
      const playlistRes = await fetchPlaylist(playlistId)
      return playlistRes.items[0]
    },
    { suspense: true },
  )

  // suspenseを使用しているため本来通らないが、型チェックのためチェックを行う
  if (!data) {
    return null
  }

  return <h1>{data.snippet.title}</h1>
}
