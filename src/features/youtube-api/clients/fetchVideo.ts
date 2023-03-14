import { youtubeApiKey } from '~/features/config/config'
import { VideoInfo } from '~/features/youtube-api/types/VideoInfo'

export const fetchVideo = async (
  videoId: string,
): Promise<{ kind: 'youtube#videoListResponse'; items: Array<VideoInfo> }> => {
  const query = new URLSearchParams({
    id: videoId,
    key: youtubeApiKey,
    part: 'id,snippet,contentDetails,liveStreamingDetails,player,recordingDetails,statistics,status,topicDetails',
    maxResults: '50',
  })
  const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?${query.toString()}`)
  return await res.json()
}
