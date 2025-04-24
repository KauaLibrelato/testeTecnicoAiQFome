import styled from "styled-components/native";

import { ITheme } from "../../../theme/utils/types";

import { IButtonProps } from "./utils/types";

export const FillContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    padding: 16px 8px;
    align-items: center;
    justify-content: center;
    opacity: ${({ disabled }: IButtonProps) => (disabled ? 0.5 : 1)};
    background-color: ${({ theme, bgColor }: ITheme & IButtonProps) =>
        bgColor ?? theme.colors.primary};
    border-radius: 8px;
`;

export const OutlineContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    padding: 8px 16px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: ${({ theme, bgColor }: ITheme & IButtonProps) => bgColor ?? theme.colors.primary};
    border-radius: 8px;
    opacity: ${({ disabled }: IButtonProps) => (disabled ? 0.5 : 1)};
`;

export const Text = styled.Text<IButtonProps>`
    font-size: 16px;
    font-family: ${({ theme }: ITheme) => theme.fonts.regular};
    color: ${({ theme, colorText }: ITheme & IButtonProps) =>
        colorText ? colorText : theme.colors.background};
`;
