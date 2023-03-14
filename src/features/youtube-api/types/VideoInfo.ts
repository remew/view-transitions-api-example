import { Thumbnail } from './Thumbnail'

export type VideoInfo = {
  kind: 'youtube#video'
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
      maxres: Thumbnail
    }
    channelTitle: string
    tags: Array<string>
    categoryId: string
    liveBroadcastContent: string
    localized: {
      title: string
      description: string
    }
  }
  contentDetails: {
    duration: string
    dimension: string
    definition: string
    caption: string
    licensedContent: boolean
    contentRating: {}
    projection: string
  }
  status: {
    uploadStatus: string
    privacyStatus: 'public'
    license: string
    embeddable: boolean
    publicStatsViewable: boolean
    madeForKids: boolean
  }
  statistics: {
    viewCount: string
    likeCount: string
    dislikeCount: string
    favoriteCount: string
    commentCount: string
  }
  player: {
    embedHtml: string
  }
  topicDetails: {
    relevantTopicIds: Array<string>
    topicCategories: Array<string>
  }
  recordingDetails: {}
}
