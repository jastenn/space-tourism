import { useEffect, useState } from "react"
import { theme } from "../tailwind.config"

const largeScreenSize = parseInt(theme.screens.xm, 10)

const useScreenLarge = () => {
  const [isScreenLarge, setIsScreenLarge] = useState<Boolean>(false)

  const resizeHandler = () => {
    if (window.innerWidth >= largeScreenSize) {
      setIsScreenLarge(true)
    } else {
      setIsScreenLarge(false)
    }
  }

  useEffect(() => {
    resizeHandler()

    window.addEventListener("resize", resizeHandler)
    return () => {
      window.removeEventListener("resize", resizeHandler)
    }
  })

  return {
    isScreenLarge,
  }
}

export default useScreenLarge
