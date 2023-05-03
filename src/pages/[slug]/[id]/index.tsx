import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { fetchPhotoInfo } from '~/features/album/client/fetchPhotoInfo'
import { PhotoDetail } from '~/features/album/components/PhotoDetail'
import styles from '~/features/album/styles/PhotolPage.module.css'
import { PhotoDetail as PhotoDetailType } from '~/features/album/types/PhotoDetail'

type Props = {
  slug: string
  data: PhotoDetailType
}

export const PhotoPage = ({ data, slug }: Props) => {
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
        <h1 className={styles.heading}>Awesome Album App</h1>
        <PhotoDetail slug={slug} data={data} />
      </main>
    </>
  )
}
export default PhotoPage

export const getServerSideProps: GetServerSideProps<Props, { slug: string; id: string }> = async (context) => {
  const slug = context.params!.slug
  const id = context.params!.id

  const data = await fetchPhotoInfo(slug, id)
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      slug,
      data,
    },
  }
}
