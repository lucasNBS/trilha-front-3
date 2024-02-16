import type { AppProps } from "next/app"
import Head from "next/head"
import AditionalContentContext from "src/contexts/AditionalContentContext"
import ThemeContenxt from "src/contexts/ThemeContext"
import UserContext from "src/contexts/UserContext"
import GlobalStyle from "src/styles/GlobalStyle"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CNBC | Evento</title>
        <meta
          name="description"
          content="A Conferência Global sobre Branqueamento de Corais: Ciência, Conservação e Sustentabilidade é um evento de importância crucial que reunirá especialistas pesquisadores, ambientalistas e formuladores de políticas de todo o mundo para discutir e abordar os desafios enfrentados pelos recifes de coral em meio ao crescente fenômeno do branqueamento."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeContenxt>
        <AditionalContentContext>
          <UserContext>
            <GlobalStyle />
            <Component {...pageProps} />
          </UserContext>
        </AditionalContentContext>
      </ThemeContenxt>
    </>
  )
}
