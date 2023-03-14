import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import styles from '~/features/video/pages/VideoPage.module.css'
import { VideoInfo } from '~/features/youtube-api/types/VideoInfo'
import { fetchVideo } from '~/features/youtube-api/clients/fetchVideo'
import { findLargestThumbnail } from '~/features/youtube-api/utils/findLargestThumbnail'

type Props = {
  videoInfo: VideoInfo
}

export const VideoPage = ({ videoInfo }: Props) => {
  const thumbnail = findLargestThumbnail(videoInfo.snippet.thumbnails)
  return (
    <main className={styles.main}>
      <h1 className={styles.title} style={{ '--title-transition-name': `${videoInfo.id}-title` }}>
        {videoInfo.snippet.title}
      </h1>
      <Image
        src={thumbnail.url}
        alt={videoInfo.snippet.title}
        width={1280}
        height={720}
        className={styles.thumbnail}
        style={{ '--video-id': videoInfo.id }}
      />
      <div className={styles.description}>{videoInfo.snippet.description}</div>
    </main>
  )
}
export default VideoPage

export const getStaticPaths: GetStaticPaths<{ id: string }> = async (context) => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (context) => {
  const id = context.params!.id

  const videoInfoRes = await fetchVideo(id)

  return {
    props: {
      videoInfo: videoInfoRes.items[0],
    },
    revalidate: 60,
  }
}