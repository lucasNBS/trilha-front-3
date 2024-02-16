import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import baseAxios from "src/lib/axios"
import { UserType } from "src/types/user"
import { createContext } from "use-context-selector"

type UserContextProps = {
  children: ReactNode
}

type UserContentType = {
  user: UserType
  setUser: Dispatch<SetStateAction<UserType>>
}

export const UserContent = createContext<UserContentType>({
  user: {} as UserType,
  setUser: (pre: SetStateAction<UserType>) => {},
})

export default function UserContext({ children }: UserContextProps) {
  const [user, setUser] = useState({} as UserType)

  return (
    <UserContent.Provider value={{ user, setUser }}>
      {children}
    </UserContent.Provider>
  )
}
