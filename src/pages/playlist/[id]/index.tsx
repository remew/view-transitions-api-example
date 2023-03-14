import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PlaylistItem } from '~/features/youtube-api/types/PlaylistItem'
import { fetchPlaylistItems } from '~/features/youtube-api/clients/fetchPlaylistItems'
import { PlaylistDetail } from '~/features/youtube-api/types/PlaylistDetail'
import { fetchPlaylist } from '~/features/youtube-api/clients/fetchPlaylist'
import styles from '~/features/playlist/pages/PlaylistPage.module.css'

type Props = {
  playlistItems: Array<PlaylistItem>
  detail: PlaylistDetail
}

export const PlaylistPage = ({ detail, playlistItems }: Props) => {
  return (
    <main className={styles.main}>
      <h1>{detail.snippet.title}</h1>
      <ul className={styles.videoList}>
        {playlistItems.map((item) => {
          const { title, thumbnails } = item.snippet
          return (
            <li key={item.id}>
              <Link href={`/video/${item.snippet.resourceId.videoId}`} className={styles.videoListItem}>
                <Image
                  src={thumbnails.default.url}
                  alt={title}
                  width={thumbnails.default.width}
                  height={thumbnails.default.height}
                  className={styles.thumbnail}
                  style={{ '--video-id': item.snippet.resourceId.videoId }}
                />
                <span>{title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
export default PlaylistPage

export const getStaticPaths: GetStaticPaths<{ id: string }> = async (context) => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (context) => {
  const id = context.params!.id

  const playlistItemsRes = await fetchPlaylistItems(id)
  const playlistRes = await fetchPlaylist(id)

  return {
    props: {
      playlistItems: playlistItemsRes.items,
      detail: playlistRes.items[0],
    },
    revalidate: 60,
  }
}
