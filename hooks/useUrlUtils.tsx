export type URLUtils = {
  withBaseURL: (path: string) => string
  withApiURL: (path: string) => string
}

export function useURLUtils(): URLUtils {
  const baseURL = process.env.NEXT_PUBLIC_CLIENT_DMAIN
  const apiURL = process.env.NEXT_PUBLIC_SERVER_DMAIN
  return {
    withBaseURL: (path) => {
      return new URL(path, baseURL).toString()
    },
    withApiURL: (path) => {
      return new URL(path, apiURL).toString()
    },
  }
}
