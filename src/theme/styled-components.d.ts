import "styled-components/native";
import { ITheme } from "./utils/types";

declare module "styled-components/native" {
    export interface DefaultTheme extends ITheme {}
}
