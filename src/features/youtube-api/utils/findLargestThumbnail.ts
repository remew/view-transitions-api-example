import { Thumbnail } from '~/features/youtube-api/types/Thumbnail'

export const findLargestThumbnail = (thumbnails: Record<string, Thumbnail>): Thumbnail => {
  let largestWidth = 0
  let targetKey = ''
  for (const [key, thumbnail] of Object.entries(thumbnails)) {
    if (thumbnail.width > largestWidth) {
      largestWidth = thumbnail.width
      targetKey = key
    }
  }
  return thumbnails[targetKey]
}
