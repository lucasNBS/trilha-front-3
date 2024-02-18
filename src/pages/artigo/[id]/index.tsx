import { GetStaticPropsContext } from "next"
import Article from "src/components/organisms/Article"
import baseAxios from "src/lib/axios"
import DefaultTemplate from "src/templates/DefaultTemplate"
import { ArticleType } from "src/types/articles"

type PageProps = {
  article: ArticleType
}

export default function Page({ article }: PageProps) {
  return (
    <DefaultTemplate>
      <Article
        title={article.title}
        content={article.content}
        cover={article.cover}
        authorName={article.author ? article.author.name : ""}
      />
    </DefaultTemplate>
  )
}

export async function getServerSideProps({ params }: GetStaticPropsContext) {
  const id = params?.id as string

  const article = await baseAxios.get(`article/${id}`).then((res) => res.data)

  return {
    props: {
      article,
    },
  }
}
