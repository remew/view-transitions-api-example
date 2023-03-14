import { youtubeApiKey } from '~/features/config/config'
import { PlaylistItem } from '~/features/youtube-api/types/PlaylistItem'

export const fetchPlaylistItems = async (
  playlistId: string,
): Promise<{ kind: 'youtube#playlistItemListResponse'; items: Array<PlaylistItem> }> => {
  const query = new URLSearchParams({
    playlistId,
    key: youtubeApiKey,
    part: 'id,snippet,contentDetails,status',
    maxResults: '10',
  })
  const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?${query.toString()}`)
  return await res.json()
}
