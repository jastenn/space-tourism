import { useEffect } from "react"

const useDisableScrollOnArrow = () => {
  const disableScrollHandler = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") e.preventDefault()
  }

  useEffect(() => {
    window.addEventListener("keydown", disableScrollHandler)
    return () => {
      window.removeEventListener("keydown", disableScrollHandler)
    }
  })
}

export default useDisableScrollOnArrow
