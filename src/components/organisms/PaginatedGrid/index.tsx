import { ReactNode } from "react"
import { GridContainer, PaginatedGridContainer } from "./style"
import Pagination from "src/components/atoms/Pagination"

type PaginatedGridProps = {
  children: ReactNode
}

export default function PaginatedGrid({ children }: PaginatedGridProps) {
  return (
    <PaginatedGridContainer>
      <GridContainer>{children}</GridContainer>
      <Pagination />
    </PaginatedGridContainer>
  )
}
