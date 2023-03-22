import Image from 'next/image'
import { PhotoDetail as PhotoDetailType } from '~/features/album/types/PhotoDetail'
import styles from './PhotoDetail.module.css'

type Props = {
  data: PhotoDetailType
}

export const PhotoDetail = ({ data }: Props) => {
  return (
    <div className={styles.root}>
      <Image src={data.url} alt={data.title} width={2048} height={2048} className={styles.image} />
      <div className={styles.info}>
        <h2>{data.title}</h2>
        <p className={styles.description}>{data.description}</p>
      </div>
    </div>
  )
}
