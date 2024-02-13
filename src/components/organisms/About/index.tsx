import Image from "next/image"
import about from "public/images/about.jpg"
import { AboutContainer, AboutSubcontainer, Text, Title } from "./style"

export default function About() {
  return (
    <AboutContainer>
      <AboutSubcontainer>
        <Title>Sobre o Evento</Title>
        <Text>
          A Conferência Nacional sobre Branqueamento de Corais: Ciência,
          Conservação e Sustentabilidade é um evento de importância crucial que
          reunirá especialistas, pesquisadores, ambientalistas e formuladores de
          políticas de todo o mundo para discutir e abordar os desafios
          enfrentados pelos recifes de coral em meio ao crescente fenômeno do
          branqueamento.
        </Text>
      </AboutSubcontainer>
      <Image
        className="image"
        src={about}
        alt="Imagem de um recife de corais"
      />
    </AboutContainer>
  )
}
