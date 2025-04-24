import styled from "styled-components/native";

import { ITheme } from "../../../theme/utils/types";

import { ITextProps } from "./utils/types";

export const Text = styled.Text`
    font-size: ${({ fontSize }: ITextProps) => fontSize || 16}px;
    color: ${({ color, theme }: ITextProps & ITheme) => color || theme.colors.primary};
    font-family: ${({ fontFamily, theme }: ITextProps & ITheme) =>
        fontFamily || theme.fonts.regular};
`;
