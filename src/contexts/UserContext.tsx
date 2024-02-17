import { parseCookies } from "nookies"
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
  setUser: (pre: SetStateAction<UserType>) => { },
})

export default function UserContext({ children }: UserContextProps) {
  const [user, setUser] = useState({} as UserType)

  useEffect(() => {
    const getData = async () => {
      const refreshToken = parseCookies()["RefreshToken"]

      if (refreshToken) {
        try {
          const res = await baseAxios.get("user")

          if (res.data) {
            setUser(res.data)
          }
        } catch (err: any) {
          console.log(err.message)
        }
      }
    }
    getData()
  }, [])

  return (
    <UserContent.Provider value={{ user, setUser }}>
      {children}
    </UserContent.Provider>
  )
}
