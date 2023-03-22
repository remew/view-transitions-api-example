import Image from 'next/image'
import { PhotoDetail as PhotoDetailType } from '~/features/album/types/PhotoDetail'
import styles from './PhotoDetail.module.css'

type Props = {
  slug: string
  data: PhotoDetailType
}

export const PhotoDetail = ({ data, slug }: Props) => {
  return (
    <div className={styles.root}>
      <Image
        src={data.url}
        alt={data.title}
        width={2048}
        height={2048}
        className={styles.image}
        style={{ '--image-transition-name': `albums-${slug}-${data.id}` }}
      />
      <div className={styles.info}>
        <h2>{data.title}</h2>
        <p className={styles.description}>{data.description}</p>
      </div>
    </div>
  )
}
