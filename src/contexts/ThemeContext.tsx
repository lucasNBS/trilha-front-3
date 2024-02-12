import { theme } from "src/styles/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

type ThemeContextProps = {
  children: ReactNode
}

export default function ThemeContenxt({ children }: ThemeContextProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}