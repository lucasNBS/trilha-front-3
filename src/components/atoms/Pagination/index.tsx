import { PaginationButton, PaginationContainer } from "./style"

export default function Pagination() {
  return (
    <PaginationContainer>
      <PaginationButton>Anterior</PaginationButton>
      <PaginationButton>Próximo</PaginationButton>
    </PaginationContainer>
  )
}
