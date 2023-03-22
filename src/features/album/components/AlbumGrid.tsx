import Image from 'next/image'
import Link from 'next/link'
import styles from './AlbumGrid.module.css'
import { useAlbumList } from '~/features/album/hooks/useAlbumList'

export const AlbumGrid = () => {
  const { data } = useAlbumList()

  // suspenseを使用しているため本来不要だが、型チェックのためチェックを行う
  if (!data) {
    return null
  }

  return (
    <ul className={styles.grid}>
      {data.map(({ title, id, thumbnail, slug }) => {
        return (
          <li key={id}>
            <Link href={`/${slug}`} className={styles.gridItem}>
              <Image
                src={thumbnail}
                alt={title}
                width={128}
                height={128}
                className={styles.thumbnail}
                style={{ '--image-transition-name': `albums-${slug}-1` }}
              />
              <h3 className={styles.albumName}>{title}</h3>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
