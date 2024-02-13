import { ReactNode } from "react"
import Footer from "src/components/organisms/Footer"
import Header from "src/components/organisms/Header"
import Aside from "src/components/molecules/Aside"
import { Main } from "./style"

type DefaultTemplateProps = {
  children: ReactNode
}

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  return (
    <>
      <Aside />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
