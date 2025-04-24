import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }: DefaultTheme) => theme.colors.background};
    padding: 0 16px;
`;

export const ContainerScroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    background-color: ${({ theme }: DefaultTheme) => theme.colors.background};
    padding: 16px;
`;
