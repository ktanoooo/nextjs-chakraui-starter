import { useRouter } from 'next/router'
import SEO from '@/containers/molecules/SEO'
import { TopPage } from '@/components/organisms/Top'

const title = 'Top Page'
const description = 'This page is top page.'

const TopContainer = () => {
  const router = useRouter()

  return (
    <>
      <SEO title={title} description={description} path={router.pathname} />
      <TopPage />
    </>
  )
}

export default TopContainer
