import Image from "next/image"
import { AdminCardContainer, Count, ImageContainer, Text } from "./style"

type AdminCardProps = {
  image: string
  text: string
  count: number
}

export default function AdminCard({ image, text, count }: AdminCardProps) {
  return (
    <AdminCardContainer>
      <ImageContainer>
        <Image
          src={image}
          alt={`Imagem ilustrativa do indicador de ${text}`}
          objectFit="cover"
          layout="fill"
        />
      </ImageContainer>
      <Text>{text}</Text>
      <Count>{count}</Count>
    </AdminCardContainer>
  )
}
