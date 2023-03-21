import { AlbumLite } from '../types/AlbumLite'
import { sleep } from '~/features/shared/libs/sleep'

export const fetchAlbums = async (): Promise<Array<AlbumLite>> => {
  await sleep(100)
  return data
}

const createAlbumLite = (id: string, title: string, slug: string): AlbumLite => {
  return {
    id,
    slug,
    title,
    thumbnail: `/thumbnails/${slug}/01.png`,
  }
}

const data: Array<AlbumLite> = [
  createAlbumLite('1', '凍りつきそうな南極', 'antarctic'),
  createAlbumLite('2', '美しい海辺', 'beach'),
  createAlbumLite('3', '過酷な砂漠', 'desert'),
  createAlbumLite('4', '幻想的な森林', 'forest'),
  createAlbumLite('5', '圧倒的な霊峰', 'mountain'),
  createAlbumLite('6', '吸い込まれそうな星空', 'star'),
]
