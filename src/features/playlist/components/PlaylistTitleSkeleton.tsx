import ContentLoader from 'react-content-loader'

const BASE_WIDTH = 500

export const PlaylistTitleSkeleton = () => {
  return (
    <ContentLoader width={BASE_WIDTH} height={42}>
      <rect x="0" y="0" rx="8" ry="8" width={BASE_WIDTH} height={42} />
    </ContentLoader>
  )
}
