import { Thumbnail } from './Thumbnail'

export type PlaylistDetail = {
  kind: 'youtube#playlist'
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
    localized: {
      title: string
      description: string
    }
  }
  status: {
    privacyStatus: 'public'
  }
  contentDetails: {
    itemCount: number
  }
}
