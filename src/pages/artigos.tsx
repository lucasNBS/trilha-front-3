import ArticleCard from "src/components/atoms/ArticleCard"
import PaginatedGrid from "src/components/organisms/PaginatedGrid"
import DefaultTemplate from "src/templates/DefaultTemplate"

const articlesList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Page() {
  return (
    <DefaultTemplate>
      <PaginatedGrid>
        {articlesList.map((item, index) => {
          return <ArticleCard />
        })}
      </PaginatedGrid>
    </DefaultTemplate>
  )
}
