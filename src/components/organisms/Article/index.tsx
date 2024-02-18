import Image from "next/image"
import {
  ArticleContainer,
  ArticleSubcontainer,
  AuthorData,
  ImageContainer,
  Text,
  Title,
} from "./style"

type ArticleProps = {
  title: string
  content: string
  cover: string
  authorName: string
}

export default function Article({
  title,
  content,
  cover,
  authorName,
}: ArticleProps) {
  return (
    <ArticleContainer>
      <ArticleSubcontainer className="image-container" flex="4 0 0">
        <ImageContainer>
          <Image src={cover} layout="fill" alt="Imagem do artigo" />
        </ImageContainer>
        <AuthorData>
          <b>Autor:</b> {authorName}
        </AuthorData>
      </ArticleSubcontainer>
      <ArticleSubcontainer flex="6 0 0">
        <Title>{title}</Title>
        <Text>{content}</Text>
      </ArticleSubcontainer>
    </ArticleContainer>
  )
}
