import { IProduct } from "../src/utils/types";

export const productMock: IProduct = {
    id: "1",
    title: "Product 1",
    description: "Description of Product 1",
    category: "Category 1",
    image: "https://example.com/product1.jpg",
    price: 19.99,
    isFavorite: false,
    rating: {
        rate: 3.5,
        count: 50,
    },
};
