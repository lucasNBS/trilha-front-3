import { Dispatch, SetStateAction } from "react"
import { PaginationButton, PaginationContainer } from "./style"

type PaginationProps = {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  hasMore: boolean
  nextPage: () => void
}

export default function Pagination({
  hasMore,
  page,
  setPage,
  nextPage,
}: PaginationProps) {
  return (
    <PaginationContainer>
      {page !== 1 && (
        <PaginationButton onClick={() => setPage((pre) => pre - 1)}>
          Anterior
        </PaginationButton>
      )}
      {hasMore && (
        <PaginationButton onClick={nextPage}>Próximo</PaginationButton>
      )}
    </PaginationContainer>
  )
}
