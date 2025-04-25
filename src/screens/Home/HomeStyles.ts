import { Platform } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { ITheme } from "../../theme/utils/types";

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${Platform.OS === "ios" ? (initialWindowMetrics?.insets.top ?? 0) / 2 : 16}px;
`;

export const IconsContainer = styled.View`
    flex-direction: row;
    gap: 16px;
`;

export const IconButton = styled.TouchableOpacity``;

export const IconButtonCount = styled.Text`
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: ${({ theme }: ITheme) => theme.colors.purple};
    color: ${({ theme }: ITheme) => theme.colors.background};
    font-size: 12px;
    font-family: ${({ theme }: ITheme) => theme.fonts.bold};
    padding: 2px 6px;
    border-radius: 12px;
`;

export const EmptyList = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const EmptyListText = styled.Text`
    font-size: 16px;
    color: ${({ theme }: ITheme) => theme.colors.purple};
    font-family: ${({ theme }: ITheme) => theme.fonts.bold};
`;

export const LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const LoadingIndicator = styled.ActivityIndicator``;
