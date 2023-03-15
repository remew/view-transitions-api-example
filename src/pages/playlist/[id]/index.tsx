import { Suspense } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Playlist } from '~/features/playlist/components/Playlist'
import { PlaylistSkeleton } from '~/features/playlist/components/PlaylistSkeleton'
import { PlaylistTitleSkeleton } from '~/features/playlist/components/PlaylistTitleSkeleton'
import { PlaylistTitle } from '~/features/playlist/components/PlaylistTitle'
import styles from '~/features/playlist/pages/PlaylistPage.module.css'
import { useIsSsr } from '~/features/shared/hooks/useIsSsr'

type Props = {
  playlistId: string
}

export const PlaylistPage = ({ playlistId }: Props) => {
  const isSsr = useIsSsr()
  return (
    <main className={styles.main}>
      {isSsr ? (
        <>
          <PlaylistTitleSkeleton />
          <PlaylistSkeleton />
        </>
      ) : (
        <Suspense
          fallback={
            <>
              <PlaylistTitleSkeleton />
              <PlaylistSkeleton />
            </>
          }
        >
          <PlaylistTitle playlistId={playlistId} />
          <Playlist playlistId={playlistId} />
        </Suspense>
      )}
    </main>
  )
}
export default PlaylistPage

export const getStaticPaths: GetStaticPaths<{ id: string }> = async (context) => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (context) => {
  return {
    props: {
      playlistId: context.params!.id,
    },
  }
}
