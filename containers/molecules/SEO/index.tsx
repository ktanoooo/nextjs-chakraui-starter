import type { FC } from 'react'
import pkg from '@/package.json'
import SEO, { Props } from '@/components/molecules/SEO'
import { useURLUtils } from '@/hooks/useUrlUtils'

const siteName = pkg.name

const SEOContainer: FC<Props> = ({ ...props }) => {
  const { withBaseURL } = useURLUtils()
  return <SEO {...props} siteName={siteName} withBaseURL={withBaseURL}></SEO>
}

export default SEOContainer
