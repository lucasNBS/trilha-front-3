import { useState } from "react"
import ArticleCard from "src/components/atoms/ArticleCard"
import PaginatedGrid from "src/components/organisms/PaginatedGrid"
import baseAxios from "src/lib/axios"
import DefaultTemplate from "src/templates/DefaultTemplate"
import { ArticleType } from "src/types/articles"

type PageProps = {
  initialArticles: ArticleType[]
  hasMoreInitialValue: boolean
}

type Response = {
  next: string | null
  prev: string | null
  results: ArticleType[]
}

export default function Page({
  initialArticles,
  hasMoreInitialValue,
}: PageProps) {
  const [articles, setArticles] = useState(initialArticles)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(hasMoreInitialValue)

  const articlesFirstIndex = (page - 1) * 20
  const articlesNextPageFirstIndex = page * 20

  async function getMoreArticles() {
    setPage((pre) => pre + 1)
    if (articlesNextPageFirstIndex < articles.length) {
      return
    }

    try {
      const { results, next }: Response = await baseAxios
        .get(`article?page=${page + 1}`)
        .then((res) => res.data)

      setHasMore(next ? true : false)

      if (results) {
        setArticles((pre) => [...pre, ...results])
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <DefaultTemplate>
      <PaginatedGrid
        hasMore={hasMore || articlesNextPageFirstIndex < articles.length}
        page={page}
        setPage={setPage}
        nextPage={getMoreArticles}
      >
        {articles
          .slice(articlesFirstIndex, articlesNextPageFirstIndex)
          .map((item, index) => {
            return (
              <ArticleCard
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                cover={item.cover}
              />
            )
          })}
      </PaginatedGrid>
    </DefaultTemplate>
  )
}

export async function getServerSideProps() {
  const res: any = await baseAxios.get("article?page=1").then((res) => res.data)

  return {
    props: {
      initialArticles: res.results,
      hasMoreInitialValue: res.next ? true : false,
    },
  }
}
