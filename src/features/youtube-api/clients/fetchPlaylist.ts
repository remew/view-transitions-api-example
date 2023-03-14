import { youtubeApiKey } from '~/features/config/config'
import { PlaylistDetail } from '~/features/youtube-api/types/PlaylistDetail'

export const fetchPlaylist = async (
  playlistId: string,
): Promise<{ kind: 'youtube#playlistListResponse'; items: Array<PlaylistDetail> }> => {
  const query = new URLSearchParams({
    id: playlistId,
    key: youtubeApiKey,
    part: 'id,snippet,contentDetails,status',
    maxResults: '10',
  })
  const res = await fetch(`https://www.googleapis.com/youtube/v3/playlists?${query.toString()}`)
  return await res.json()
}
