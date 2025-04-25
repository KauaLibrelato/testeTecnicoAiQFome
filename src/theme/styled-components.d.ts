import "styled-components/native";
import { IThemeForStyledComponents } from "./utils/types";

declare module "styled-components/native" {
    export interface DefaultTheme extends IThemeForStyledComponents {}
}
