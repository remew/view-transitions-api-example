import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { useCurrentViewTransition } from '~/features/shared/hooks/useCurrentViewTransition'
import styles from '~/features/video/pages/VideoThumbnail.module.css'

type Props = {
  videoId: string
  url: string
  alt: string
}

export const VideoThumbnail = ({ videoId, url, alt }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const onLoadingComplete = useCallback(() => {
    setIsLoaded(true)
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
  }, [])

  return (
    <div className={styles.root} style={{ '--thumbnail-transition-name': videoId }}>
      <Image
        src={url}
        alt={alt}
        width={1280}
        height={720}
        priority
        className={styles.thumbnail}
        onLoadingComplete={onLoadingComplete}
      />
      <div className={clsx(styles.overlay, [isLoaded && viewTransitionFinished ? styles.hidden : null])} />
    </div>
  )
}
