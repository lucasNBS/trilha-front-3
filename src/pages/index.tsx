import About from "src/components/organisms/About"
import Banner from "src/components/organisms/Banner"
import DefaultTemplate from "src/templates/DefaultTemplate"

export default function Home() {
  return (
    <DefaultTemplate>
      <Banner />
      <About />
    </DefaultTemplate>
  )
}
