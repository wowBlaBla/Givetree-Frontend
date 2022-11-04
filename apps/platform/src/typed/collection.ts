export interface Collection {
    address: string;
    name: string;
    pattern: string;
    logo: string;
    featured: string;
    banner: string;
    category: string;
    network: string;
    description: string
}

export interface IOfferError {
    price: boolean;
    quality: boolean;
}
  
export interface IOffer {
    bider: string;
    bidPrice: string;
    amount: string;
}