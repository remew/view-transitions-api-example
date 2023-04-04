import { PhotoLite } from '~/features/album/types/PhotoLite'

export type PhotoDetail = Omit<PhotoLite, 'thumbnail'> & {
  url: string
  description: string
  color: string
}
