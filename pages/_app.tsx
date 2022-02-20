import "../styles/globals.css"
import type { AppProps } from "next/app"
import Navigation from "../components/Navigation"
import { useRouter } from "next/router"
import DestinationContextProvider from "../context/DestinationContextProvider"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const getBgImage = () => {
    switch (router.pathname) {
      case "/":
        return "bg-home-sm md:bg-home-md xm:bg-home-lg"
      case "/destination":
        return "bg-destination-sm md:bg-destination-md xm:bg-destination-lg"
      default:
        return "bg-none"
    }
  }
  return (
    <DestinationContextProvider>
      <div
        className={`overflow-x-hidden relative min-h-screen font-sans text-base bg-cinder text-white ${getBgImage()} bg-no-repeat bg-cover bg-center`}
      >
        <Navigation />
        <div className="max-w-[69.375rem] min-h-80vh flex items-center w-[87%] mx-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </DestinationContextProvider>
  )
}

export default MyApp
