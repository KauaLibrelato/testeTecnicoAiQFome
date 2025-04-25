import { Image } from "expo-image";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { ITheme } from "../../../theme/utils/types";

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})<{ favoriteScreen?: boolean }>`
    background-color: ${({ theme }: ITheme) => theme.colors.background};
    border-radius: 16px;
    border: 1px solid ${({ theme }: ITheme) => theme.colors.lightGray};
    width: ${({ favoriteScreen }: { favoriteScreen?: boolean }) =>
        !favoriteScreen ? Dimensions.get("window").width / 2 - 24 : "100%"};
    margin: ${({ favoriteScreen }: { favoriteScreen?: boolean }) =>
        favoriteScreen ? "0 0 16px 0" : "0 8px 16px 8px"};
    padding: 8px;
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
    right: 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const FavoriteButton = styled.Pressable`
    background-color: ${({ theme }: ITheme) => theme.colors.background};
    border-radius: 50px;
    width: 36px;
    height: 36px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }: ITheme) => theme.colors.lightGray};
`;

export const TextsContainer = styled.View`
    gap: 4px;
    flex: 1;
`;

export const TextLine = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;
