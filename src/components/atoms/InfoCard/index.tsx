import Image, { StaticImageData } from "next/image"
import { InfoCardContainer, InfoCardSubcontainer, Text, Title } from "./style"

type InfoCardProps = {
  title: string
  text: string
  image: StaticImageData
  alt: string
  isEven: boolean
}

export default function InfoCard({
  title,
  text,
  image,
  alt,
  isEven,
}: InfoCardProps) {
  return (
    <InfoCardContainer isEven={isEven}>
      <Image className="image" src={image} alt={alt} />
      <InfoCardSubcontainer>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </InfoCardSubcontainer>
    </InfoCardContainer>
  )
}
