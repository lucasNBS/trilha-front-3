import Image from "next/image"
import { ArticleCardContainer, ContentContainer, Text, Title } from "./style"
import Link from "next/link"

type ArticleCardProps = {
  id: number
  title: string
  content: string
  cover: string
}

export default function ArticleCard({
  id,
  title,
  content,
  cover,
}: ArticleCardProps) {
  return (
    <Link href={`/artigo/${id}`} prefetch={false}>
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
    </Link>
  )
}
