import { Image as ExpoImage } from "expo-image";
import { Animated, Platform } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { ITheme } from "../../theme/utils/types";

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    background-color: ${({ theme }: ITheme) => theme.colors.background};
`;

export const Header = styled(Animated.View)`
    padding: 0 8px;
    background-color: ${({ theme }: ITheme) => theme.colors.background};
`;

export const HeaderContent = styled.View`
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
    align-items: center;
`;

export const HeaderBorder = styled(Animated.View)`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }: ITheme) => theme.colors.purple};
`;

export const ImageContainer = styled.View``;

export const Image = styled(Animated.createAnimatedComponent(ExpoImage))`
    width: 100%;
    height: 350px;
`;

export const Body = styled.View`
    padding: 16px;
    gap: 8px;
    padding-bottom: 120px;
`;

export const RatingContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Footer = styled.View`
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 100%;
    padding: 16px 16px ${initialWindowMetrics?.insets.bottom ?? 16}px 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }: ITheme) => theme.colors.background};
    border-top-width: 1px;
    border-top-color: ${({ theme }: ITheme) => theme.colors.purple};
`;

export const ButtonContainer = styled.View`
    width: 45%;
`;
