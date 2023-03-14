import { Thumbnail } from './Thumbnail'

export type PlaylistItem = {
  kind: 'youtube#playlistItem'
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: Thumbnail
      medium: Thumbnail
      high: Thumbnail
      standard: Thumbnail
    }
    channelTitle: string
    playlistId: string
    position: number
    resourceId: {
      kind: 'youtube#video'
      videoId: string
    }
  }
  contentDetails: {
    videoId: string
    videoPublishedAt: string
  }
  status: {
    privacyStatus: 'public'
  }
}
