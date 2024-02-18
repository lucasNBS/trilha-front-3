import { Dispatch, ReactNode, SetStateAction } from "react"
import { GridContainer, PaginatedGridContainer } from "./style"
import Pagination from "src/components/atoms/Pagination"

type PaginatedGridProps = {
  children: ReactNode
  page: number
  setPage: Dispatch<SetStateAction<number>>
  hasMore: boolean
  nextPage: () => void
}

export default function PaginatedGrid({
  children,
  hasMore,
  page,
  setPage,
  nextPage,
}: PaginatedGridProps) {
  return (
    <PaginatedGridContainer>
      <GridContainer>{children}</GridContainer>
      <Pagination
        hasMore={hasMore}
        page={page}
        setPage={setPage}
        nextPage={nextPage}
      />
    </PaginatedGridContainer>
  )
}
