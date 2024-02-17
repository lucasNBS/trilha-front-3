import Image from "next/image"
import cover from "public/images/cover.jpeg"
import { ArticleCardContainer, ContentContainer } from "./style"

export default function ArticleCard() {
  return (
    <ArticleCardContainer>
      <Image
        src={cover.src}
        layout="fill"
        objectPosition="center"
        alt="Capa do artigo"
      />
      <ContentContainer />
    </ArticleCardContainer>
  )
}
