import { ReactNode } from "react";
import { TextProps } from "react-native";

export interface ITextProps extends TextProps {
    children: string | string[] | ReactNode;
    fontSize?: number;
    color?: string;
    fontFamily?: string;
}
