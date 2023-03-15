import { useMemo } from 'react'
import styles from '~/features/playlist/pages/PlaylistPage.module.css'
import ContentLoader from 'react-content-loader'

export const PlaylistSkeleton = () => {
  const array = useMemo(() => {
    return Array(10)
      .fill(0)
      .map(() => {
        const BASE_WIDTH = 500
        return Math.floor(BASE_WIDTH + Math.random() * 100)
      })
  }, [])

  return (
    <ul className={styles.videoList}>
      {array.map((width, index) => {
        return (
          <li key={index}>
            <div className={styles.videoListItem}>
              <ContentLoader width={160} height={90}>
                <rect x="0" y="0" rx="8" ry="8" width="160" height="90" />
              </ContentLoader>
              <ContentLoader width={width} height={24}>
                <rect x="0" y="0" rx="4" ry="4" width={width} height="24" />
              </ContentLoader>
              <span className={styles.title}></span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
