export type Product = {
    productId: string;
    bodyHtml: string;
    imageSrc: string;
}

export interface ProductsState {
    products: Product[];
    status: 'idle' | 'loading' | 'failed' | 'succeeded';
    error: string | null;
}