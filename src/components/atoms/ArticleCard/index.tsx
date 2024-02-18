import Image from "next/image"
import { ArticleCardContainer, ContentContainer, Text, Title } from "./style"

type ArticleCardProps = {
  title: string
  content: string
  cover: string
}

export default function ArticleCard({
  title,
  content,
  cover,
}: ArticleCardProps) {
  return (
    <ArticleCardContainer>
      <Image
        src={cover}
        layout="fill"
        objectPosition="center"
        alt="Capa do artigo"
      />
      <ContentContainer>
        <Title>{title}</Title>
        <Text>{content}</Text>
      </ContentContainer>
    </ArticleCardContainer>
  )
}
