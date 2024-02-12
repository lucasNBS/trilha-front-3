import { ReactNode } from "react"
import Footer from "src/components/organisms/Footer"
import Header from "src/components/organisms/Header"
import { Main } from "./style"

type DefaultTemplateProps = {
  children: ReactNode
}

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
