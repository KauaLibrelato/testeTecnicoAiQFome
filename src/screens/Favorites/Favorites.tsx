import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";

import { ScreenContent, Text } from "../../components";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import { NavigationProps } from "../../routes/utils/types";
import { useStore } from "../../store/store";

import * as S from "./FavoritesStyles";

export function Favorites() {
    const navigation = useNavigation<NavigationProps>();
    const theme = useTheme();
    const { favoriteProducts } = useStore((state) => state);
    return (
        <ScreenContent>
            <S.Header>
                <S.HeaderButton onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={32} color={theme.colors.purple} />
                </S.HeaderButton>
            </S.Header>

            {favoriteProducts?.length && (
                <S.TitleContainer>
                    <Text fontSize={24} fontFamily={theme.fonts.bold} color={theme.colors.primary}>
                        Favorites
                    </Text>
                </S.TitleContainer>
            )}

            <FlatList
                data={favoriteProducts}
                renderItem={({ item: product }) => (
                    <ProductCard
                        data={product}
                        onPress={() => navigation.navigate("Details", { data: product })}
                        favoriteScreen
                    />
                )}
                contentContainerStyle={{ paddingBottom: 32 }}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <S.EmptyList>
                        <AntDesign name="frowno" size={32} color={theme.colors.purple} />
                        <Text
                            fontSize={16}
                            fontFamily={theme.fonts.bold}
                            color={theme.colors.purple}
                        >
                            You don't have any favorite products yet.
                        </Text>
                    </S.EmptyList>
                )}
            />
        </ScreenContent>
    );
}
