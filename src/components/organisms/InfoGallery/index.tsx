import estudo from "public/images/estudo.jpeg"
import discussao from "public/images/discussao.jpg"
import sustentabilidade from "public/images/sustentabilidade.jpg"
import { InfoGalleryContainer } from "./style"
import InfoCard from "src/components/atoms/InfoCard"

const infoCardsList = [
  {
    title: "Apresentação de Pesquisas e Estudos de Caso",
    text: "Cientistas e pesquisadores líderes apresentarão os resultados de suas pesquisas mais recentes sobre o branqueamento de corais, incluindo estudos de casos globais e locais, análises de tendências e projeções futuras",
    image: estudo,
    alt: "Imagem de pesquisa",
  },
  {
    title: "Exploração de Soluções Sustentáveis",
    text: "Serão destacadas abordagens inovadoras e práticas sustentáveis para proteger e preservar os recifes de coral, incluindo práticas de turismo responsável, desenvolvimento de comunidades costeiras e promoção de estilos de vida mais sustentáveis",
    image: sustentabilidade,
    alt: "Imagem de sustentabilidade",
  },
  {
    title: "Discussão de Estratégias de Conservação",
    text: "Painéis de especialistas abordarão estratégias eficazes de conservação e manejo de recifes de coral, incluindo a criação de áreas marinhas protegidas, iniciativas de restauração de corais, redução da poluição e mitigação das mudanças climáticas",
    image: discussao,
    alt: "Imagem de discussão",
  },
]

export default function InfoGallery() {
  return (
    <InfoGalleryContainer>
      {infoCardsList.map((item, index) => {
        const isEven = (index + 1) % 2 === 0

        return <InfoCard key={index} isEven={isEven} {...item} />
      })}
    </InfoGalleryContainer>
  )
}
