export interface IProduct {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    isFavorite: boolean;
    rating: {
        rate: number;
        count: number;
    };
}
