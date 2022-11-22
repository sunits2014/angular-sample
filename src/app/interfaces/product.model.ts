export interface IProduct {
    id: string;
    description: string;
    category: string;
    image: string;
    price: string;
    title: string;
    rating: {
        rate: string;
        count: string
    }
}