import "../styles/globals.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="overflow-x-hidden relative min-h-screen font-sans text-base bg-cinder text-white">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
