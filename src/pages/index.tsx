import Info from "src/components/molecules/Info"
import About from "src/components/organisms/About"
import Banner from "src/components/organisms/Banner"
import InfoGallery from "src/components/organisms/InfoGallery"
import DefaultTemplate from "src/templates/DefaultTemplate"

export default function Home() {
  return (
    <DefaultTemplate>
      <Banner />
      <About />
      <Info />
      <InfoGallery />
    </DefaultTemplate>
  )
}
