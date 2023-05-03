import { GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from '~/features/album/styles/AlbumDetailPage.module.css'
import { AlbumDetail } from '~/features/album/components/AlbumDetail'
import { AlbumDetail as AlbumDetailType } from '~/features/album/types/AlbumDetail'
import { fetchAlbumDetail } from '~/features/album/client/fetchAlbumDetail'

type Props = {
  data: AlbumDetailType
}

export const AlbumDetailPage = ({ data }: Props) => {
  const title = `${data.title} | Awesome Album App`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Awesome Album App</h1>
        <AlbumDetail data={data} />
      </main>
    </>
  )
}
export default AlbumDetailPage

export const getServerSideProps: GetServerSideProps<Props, { slug: string }> = async (context) => {
  const slug = context.params!.slug
  const data = await fetchAlbumDetail(slug)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    },
  }
}
