import styles from '~/features/playlist/pages/PlaylistPage.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { fetchPlaylistItems } from '~/features/youtube-api/clients/fetchPlaylistItems'

type Props = {
  playlistId: string
}

export const Playlist = ({ playlistId }: Props) => {
  const { data: playlistItems } = useQuery(
    ['/playlistItems', playlistId],
    async () => {
      const playlistItemsRes = await fetchPlaylistItems(playlistId)
      return playlistItemsRes.items
    },
    { suspense: true },
  )

  // suspenseを使用しているため本来通らないが、型チェックのためチェックを行う
  if (!playlistItems) {
    return null
  }

  return (
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
                style={{ '--thumbnail-transition-name': item.snippet.resourceId.videoId }}
              />
              <span
                className={styles.title}
                style={{ '--title-transition-name': `${item.snippet.resourceId.videoId}-title` }}
              >
                {title}
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
