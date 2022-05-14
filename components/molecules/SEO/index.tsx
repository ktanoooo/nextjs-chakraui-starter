import Head from 'next/head'
import type { FC } from 'react'
import { URLUtils } from '@/hooks/useUrlUtils'

type Image = {
  height?: number
  type?: string
  url: string
  width?: number
}

export type Props = {
  description?: string
  image?: Image
  noindex?: boolean
  path?: string
  title?: string
  type?: 'article' | 'website'
}

const SEO: FC<Props & { siteName: string; withBaseURL: URLUtils['withBaseURL'] }> = ({
  description,
  image,
  noindex = false,
  path,
  title,
  type = 'website',
  siteName,
  withBaseURL,
}) => {
  return (
    <Head>
      <title>{title ? `${title} - ${siteName}` : siteName}</title>
      {noindex && <meta content="noindex" name="robots" />}

      {description && <meta content={description} name="description" />}
      {description && <meta content={description} property="og:description" />}
      {image && (
        <>
          <meta content={withBaseURL(image.url)} property="og:image" />
          {image.height && <meta content={`${image.height}`} property="og:image:height" />}
          {image.type && <meta content={image.type} property="og:image:type" />}
          {image.width && <meta content={`${image.width}`} property="og:image:width" />}
        </>
      )}
      {title && <meta content={siteName} property="og:site_name" />}
      <meta content={title ?? siteName} property="og:title" />
      <meta content={type} property="og:type" />
      {path && <meta content={withBaseURL(path)} property="og:url" />}
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="@Inaba_Jinja" name="twitter:site" />
      {title && <meta content={`${title} - ${siteName}`} name="twitter:title" />}

      {path && <link href={withBaseURL(path)} rel="canonical" />}
    </Head>
  )
}

export default SEO
