import { PhotoDetail } from '~/features/album/types/PhotoDetail'
import { sleep } from '~/features/shared/libs/sleep'
import { data } from './fetchAlbumDetail'

export const fetchPhotoInfo = async (slug: string, id: string): Promise<PhotoDetail | undefined> => {
  await sleep(100)

  const album = data.find((item) => {
    return item.slug === slug
  })
  if (!album) {
    return undefined
  }

  const photo = album.photos.find((photo) => {
    return photo.id === id
  })
  if (!photo) {
    return undefined
  }

  return {
    ...photo,
    url: `/images/${slug}/${id.padStart(2, '0')}.png`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
}
