import { AlbumLite } from './AlbumLite'
import { PhotoLite } from './PhotoLite'

export type AlbumDetail = AlbumLite & {
  description: string
  photos: Array<PhotoLite>
}
