import { Dispatch, ReactNode, SetStateAction, useState } from "react"
import { createContext } from "use-context-selector"

type AditionalContentContextProps = {
  children: ReactNode
}

type AditionalContentType = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const AditionalContent = createContext<AditionalContentType>({
  isOpen: false,
  setIsOpen: (pre: SetStateAction<boolean>) => {},
})

export default function AditionalContentContext({
  children,
}: AditionalContentContextProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AditionalContent.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AditionalContent.Provider>
  )
}
