import { Platform } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { ITheme } from "../../theme/utils/types";

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${Platform.OS === "ios" ? initialWindowMetrics?.insets.top : 40}px;
`;

export const HeaderButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    background-color: ${({ theme }: ITheme) => theme.colors.background};
    width: 48px;
    height: 48px;
    border-radius: 24px;
    justify-content: center;
`;

export const EmptyList = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 32px;
`;

export const LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const LoadingIndicator = styled.ActivityIndicator``;

export const TitleContainer = styled.View`
    margin: 32px 0 16px 0;
`;
