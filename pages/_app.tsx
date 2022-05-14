import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/themes/createTheme'
import appleTouchIcon from '@/assets/icons/apple-touch-icon.png'
import favicon192x192 from '@/assets/icons/favicon-192x192.png'
import favicon512x512 from '@/assets/icons/favicon-512x512.png'
import { GA_TRACKING_ID, pageview } from '@/libs/gtag'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    if (!GA_TRACKING_ID) return
    const handleRouteChange = (url: string) => pageview(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
      <Head>
        <meta content="viewport-fit=cover,width=device-width" name="viewport" />
        <link
          href={favicon192x192.src}
          rel="icon"
          sizes={`${favicon192x192.width}x${favicon192x192.height}`}
          type="image/png"
        />
        <link
          href={favicon512x512.src}
          rel="icon"
          sizes={`${favicon512x512.width}x${favicon512x512.height}`}
          type="image/png"
        />
        <link
          href={appleTouchIcon.src}
          rel="apple-touch-icon"
          sizes={`${appleTouchIcon.width}x${appleTouchIcon.height}`}
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
