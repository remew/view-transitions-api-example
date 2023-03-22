import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './AlbumDetail.module.css'
import { AlbumDetail as AlbumDetailType } from '~/features/album/types/AlbumDetail'
import { usePrefetchAlbumList } from '~/features/album/hooks/usePrefetchAlbumList'
import { useDidMount } from '~/features/shared/hooks/useDidMount'

type Props = {
  data: AlbumDetailType
}

export const AlbumDetail = ({ data }: Props) => {
  const prefetchAlbums = usePrefetchAlbumList()
  useDidMount(async () => {
    await prefetchAlbums()
  })

  return (
    <div className={styles.root}>
      <h2>{data.title}</h2>
      <p className={styles.description}>{data.description}</p>
      <ul className={styles.grid}>
        {data.photos.map(({ title, id, thumbnail }) => {
          return (
            <li key={id} className={styles.gridItem}>
              <Link href={`/${data.slug}/${id}`} className={styles.anchor}>
                <Image
                  src={thumbnail}
                  alt={title}
                  width={128}
                  height={128}
                  priority
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
