import { fireEvent } from "@testing-library/react-native";
import { toast } from "sonner-native";

import { productMock } from "../../../__mocks__/productData";
import { renderWithTheme } from "../../../__mocks__/renderComponenteWithTheme";
import ProductCard from "../../../src/components/Cards/ProductCard/ProductCard";
import { useStore } from "../../../src/store/store";

jest.mock(".../../../src/store/store", () => ({
    useStore: jest.fn(),
}));

jest.mock("sonner-native", () => ({
    toast: {
        success: jest.fn(),
        error: jest.fn(),
    },
}));
jest.mock("@react-native-async-storage/async-storage", () =>
    require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

jest.mock("expo-font", () => ({
    loadAsync: jest.fn(),
    useFonts: jest.fn(() => [true, null]),
    isLoaded: jest.fn(() => true), // <-- adiciona isso aqui
}));

const mockOnPress = jest.fn();
describe("ProductCard", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders product data", () => {
        (useStore as jest.Mock).mockReturnValue({
            favoriteProducts: [],
            addFavoriteProduct: jest.fn(),
            removeFavoriteProduct: jest.fn(),
        });

        const { getByText, getByTestId } = renderWithTheme(
            <ProductCard data={productMock} onPress={mockOnPress} />,
        );

        expect(getByText("Product 1")).toBeTruthy();
        expect(getByText("Category 1")).toBeTruthy();
        expect(getByText("R$ 19,99")).toBeTruthy();
        expect(getByText("3.5 (50)")).toBeTruthy();
        expect(getByTestId("product-card-image")).toBeTruthy();
    });

    it("calls onPress when card is pressed", () => {
        (useStore as jest.Mock).mockReturnValue({
            favoriteProducts: [],
            addFavoriteProduct: jest.fn(),
            removeFavoriteProduct: jest.fn(),
        });

        const { getByTestId } = renderWithTheme(
            <ProductCard data={productMock} onPress={mockOnPress} />,
        );

        fireEvent.press(getByTestId("product-card-container"));
        expect(mockOnPress).toHaveBeenCalled();
    });

    it("adds product to favorites", async () => {
        const addFavoriteProduct = jest.fn();
        (useStore as jest.Mock).mockReturnValue({
            favoriteProducts: [],
            addFavoriteProduct,
            removeFavoriteProduct: jest.fn(),
        });

        const { getByTestId } = renderWithTheme(
            <ProductCard data={productMock} onPress={mockOnPress} />,
        );

        fireEvent.press(getByTestId("favorite-button"));
        expect(addFavoriteProduct).toHaveBeenCalledWith(productMock);
        expect(toast.success).toHaveBeenCalledWith("Product added to favorites!", {
            richColors: true,
        });
    });

    it("removes product from favorites", async () => {
        const removeFavoriteProduct = jest.fn();
        (useStore as jest.Mock).mockReturnValue({
            favoriteProducts: [productMock],
            addFavoriteProduct: jest.fn(),
            removeFavoriteProduct,
        });

        const { getByTestId } = renderWithTheme(
            <ProductCard data={productMock} onPress={mockOnPress} />,
        );

        fireEvent.press(getByTestId("favorite-button"));
        expect(removeFavoriteProduct).toHaveBeenCalledWith(productMock.id);
        expect(toast.error).toHaveBeenCalledWith("Product removed from favorites!", {
            richColors: true,
        });
    });

    it("removes product if in favorite screen", () => {
        const removeFavoriteProduct = jest.fn();
        (useStore as jest.Mock).mockReturnValue({
            favoriteProducts: [],
            addFavoriteProduct: jest.fn(),
            removeFavoriteProduct,
        });

        const { getByTestId } = renderWithTheme(
            <ProductCard data={productMock} onPress={mockOnPress} favoriteScreen />,
        );

        fireEvent.press(getByTestId("favorite-button"));
        expect(removeFavoriteProduct).toHaveBeenCalledWith(productMock.id);
    });
});
