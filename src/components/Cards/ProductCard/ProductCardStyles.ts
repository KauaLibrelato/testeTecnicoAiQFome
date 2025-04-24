import { Image } from "expo-image";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { ITheme } from "../../../theme/utils/types";

export const Container = styled.View.attrs({
    shadowColor: "#333333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
})``;

export const TouchableContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    overflow: hidden;
    background-color: ${({ theme }: ITheme) => theme.colors.background};
    border-radius: 16px;
    shadowcolor: "#333333";
    shadowopacity: 0.2;
    elevation: 3;
    width: ${Dimensions.get("window").width / 2 - 24}px;
    margin: 0 8px 16px 8px;
`;

export const Miniature = styled(Image)`
    width: 100%;
    height: 180px;
    border-radius: 16px;
    margin-bottom: 8px;
`;

export const TopBadgesContainer = styled.View`
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CategoryBadge = styled.View`
    background-color: ${({ theme }: ITheme) => theme.colors.background};
    padding: 4px 8px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid ${({ theme }: ITheme) => theme.colors.lightGray};
`;

export const CategoryBadgeText = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }: ITheme) => theme.fonts.medium};
    color: ${({ theme }: ITheme) => theme.colors.primary};
`;

export const FavoriteButton = styled.Pressable`
    background-color: ${({ theme }: ITheme) => theme.colors.background};
    padding: 8px;
    border-radius: 50px;
    width: 36px;
    height: 36px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }: ITheme) => theme.colors.lightGray};
`;

export const TextsContainer = styled.View`
    gap: 4px;
    padding: 0 8px 8px 8px;
    flex: 1;
`;

export const TextLine = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;
