import "../styles/globals.css"
import type { AppProps } from "next/app"
import Navigation from "../components/Navigation"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  console.log(router.pathname)

  const getBgImage = () => {
    switch (router.pathname) {
      case "/":
        return "bg-home-sm md:bg-home-md xm:bg-home-lg"
      default:
        return "bg-none"
    }
  }
  return (
    <div
      className={`overflow-x-hidden relative min-h-screen font-sans text-base bg-cinder text-white ${getBgImage()} bg-no-repeat bg-cover bg-center`}
    >
      <Navigation />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
