import { AlbumDetail } from '~/features/album/types/AlbumDetail'
import { PhotoLite } from '~/features/album/types/PhotoLite'
import { sleep } from '~/features/shared/libs/sleep'

export const fetchAlbumDetail = async (slug: string): Promise<AlbumDetail | undefined> => {
  await sleep(100)
  return data.find((item) => {
    return item.slug === slug
  })
}

const createPhotos = (slug: string, count: number, prefix: string): Array<PhotoLite> => {
  return Array(count)
    .fill(0)
    .map((_, index) => {
      const number = String(index + 1).padStart(2, '0')
      return {
        id: String(index + 1),
        title: `${prefix}${number}`,
        thumbnail: `/thumbnails/${slug}/${number}.png`,
      }
    })
}

const createAlbumDetail = (
  id: string,
  title: string,
  slug: string,
  description: string,
  prefix: string,
): AlbumDetail => {
  const photos = createPhotos(slug, 4, prefix)
  return {
    id,
    slug,
    title,
    thumbnail: `/thumbnails/${slug}/01.png`,
    description,
    photos,
  }
}

const data: Array<AlbumDetail> = [
  createAlbumDetail(
    '1',
    '凍りつきそうな南極',
    'antarctic',
    '10年ほど前に南極近辺を訪れた際に撮影した写真です。\n',
    '南極',
  ),
  createAlbumDetail(
    '2',
    '美しい海辺',
    'beach',
    'ワーケーションを兼ねた海外旅行で撮影した写真です。\n地元の海と比べものにならないほど美しく、感動しました。',
    '○○海',
  ),
  createAlbumDetail(
    '3',
    '過酷な砂漠',
    'desert',
    '見ての通り、砂漠の写真です。\n人間にとっては過酷な環境が広がっていました。',
    '○○砂漠',
  ),
  createAlbumDetail(
    '4',
    '幻想的な森林',
    'forest',
    '世界各地にある美しい森林の写真です。\n迷子になりかけてしまい非常に焦った思い出があります。',
    '森林',
  ),
  createAlbumDetail('5', '圧倒的な霊峰', 'mountain', '友人の登山家が撮影している山岳を代理で公開しています。', '○○山'),
  createAlbumDetail(
    '6',
    '吸い込まれそうな星空',
    'star',
    '気が向いたときに山奥に訪れて撮影している星空の写真です。',
    '星空',
  ),
]
