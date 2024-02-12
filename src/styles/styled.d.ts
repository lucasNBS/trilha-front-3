import "styled-components"
import { ThemeType } from "src/types/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType { }
}