import React, { createContext, FC, useState } from "react"

interface DestinationMeta {
  idx: number
  name: string
}

interface CreateContextType {
  destination: DestinationMeta
  setDestination?: React.Dispatch<React.SetStateAction<DestinationMeta>>
}

const defaultDestination = {
  idx: 0,
  name: "Moon",
}

export const DestinationContext = createContext<CreateContextType>({
  destination: defaultDestination,
})

const DestinationContextProvider: FC = ({ children }) => {
  const [destination, setDestination] =
    useState<DestinationMeta>(defaultDestination)

  return (
    <DestinationContext.Provider value={{ destination, setDestination }}>
      {children}
    </DestinationContext.Provider>
  )
}

export default DestinationContextProvider
