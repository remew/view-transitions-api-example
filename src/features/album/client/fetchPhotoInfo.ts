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
  const color =
    photos.find((p) => {
      return p.id === id && p.slug === slug
    })?.color ?? '#000'

  return {
    ...photo,
    color: color,
    url: `/images/${slug}/${id.padStart(2, '0')}.png`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
}

const photos = [
  { id: '1', slug: 'antarctic', color: '#6497d6' },
  { id: '2', slug: 'antarctic', color: '#87aed6' },
  { id: '3', slug: 'antarctic', color: '#87b1dc' },
  { id: '4', slug: 'antarctic', color: '#4d7196' },
  { id: '1', slug: 'beach', color: '#8ea8af' },
  { id: '2', slug: 'beach', color: '#a1a09e' },
  { id: '3', slug: 'beach', color: '#a28a6d' },
  { id: '4', slug: 'beach', color: '#6d9ac9' },
  { id: '1', slug: 'desert', color: '#522413' },
  { id: '2', slug: 'desert', color: '#964423' },
  { id: '3', slug: 'desert', color: '#b46d4a' },
  { id: '4', slug: 'desert', color: '#d86d38' },
  { id: '1', slug: 'forest', color: '#201806' },
  { id: '2', slug: 'forest', color: '#35361e' },
  { id: '3', slug: 'forest', color: '#364410' },
  { id: '4', slug: 'forest', color: '#32220d' },
  { id: '1', slug: 'mountain', color: '#a4a6a5' },
  { id: '2', slug: 'mountain', color: '#a7c7f2' },
  { id: '3', slug: 'mountain', color: '#aeb7cf' },
  { id: '4', slug: 'mountain', color: '#617ca4' },
  { id: '1', slug: 'star', color: '#11132c' },
  { id: '2', slug: 'star', color: '#6a98c2' },
  { id: '3', slug: 'star', color: '#5d5364' },
  { id: '4', slug: 'star', color: '#1c170f' },
]
