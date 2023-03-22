import Image from 'next/image'
import Link from 'next/link'
import styles from './AlbumDetail.module.css'
import { AlbumDetail as AlbumDetailType } from '~/features/album/types/AlbumDetail'

type Props = {
  data: AlbumDetailType
}

export const AlbumDetail = ({ data }: Props) => {
  return (
    <div className={styles.root}>
      <h2>{data.title}</h2>
      <p className={styles.description}>{data.description}</p>
      <ul className={styles.grid}>
        {data.photos.map(({ title, id, thumbnail }) => {
          return (
            <li key={id}>
              <Link href={`/${data.slug}/${id}`} className={styles.gridItem}>
                <Image
                  src={thumbnail}
                  alt={title}
                  width={128}
                  height={128}
                  className={styles.thumbnail}
                  style={{ '--image-transition-name': `albums-${data.slug}-${id}` }}
                />
                <h3 className={styles.title}>{title}</h3>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
