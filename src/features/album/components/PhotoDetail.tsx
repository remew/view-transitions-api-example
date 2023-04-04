import Image from 'next/image'
import { PhotoDetail as PhotoDetailType } from '~/features/album/types/PhotoDetail'
import styles from './PhotoDetail.module.css'
import { useCallback, useEffect, useState } from 'react'
import { useCurrentViewTransition } from '~/features/shared/hooks/useCurrentViewTransition'
import clsx from 'clsx'

type Props = {
  slug: string
  data: PhotoDetailType
}

export const PhotoDetail = ({ data, slug }: Props) => {
  const [loaded, setLoaded] = useState(false)
  const onLoadingComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  const [viewTransitionFinished, setViewTransitionFinished] = useState(false)
  const viewTransition = useCurrentViewTransition()
  useEffect(() => {
    if (!viewTransition) {
      setViewTransitionFinished(true)
      return
    }
    viewTransition.finished.then(() => {
      setViewTransitionFinished(true)
    })
  }, [viewTransition])

  const shouldShowOverlay = !loaded || !viewTransitionFinished

  return (
    <div
      className={styles.root}
      style={{
        '--overlay-transition-name': `albums-${slug}-${data.id}`,
        '--overlay-background': data.color,
      }}
    >
      <div className={styles.imageContainer}>
        <Image
          src={data.url}
          alt={data.title}
          width={2048}
          height={2048}
          priority
          className={clsx(styles.image, shouldShowOverlay ? styles.hidden : styles.transitionTarget)}
          onLoadingComplete={onLoadingComplete}
        />
        <div className={styles.overlayContainer}>
          <div className={clsx(styles.overlay, shouldShowOverlay ? styles.transitionTarget : styles.hidden)} />
        </div>
      </div>
      <div className={styles.info}>
        <h2>{data.title}</h2>
        <p className={styles.description}>{data.description}</p>
      </div>
    </div>
  )
}
