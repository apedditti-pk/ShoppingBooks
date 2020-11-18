/* Defines the Book entity */
export interface Book {
    kind: string;
    totalItems: number;
    items: BookItems[];
}

export interface BookItems{
    kind : string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: object;
    saleInfo: object;
    accessInfo:object;
    searchInfo: object;
    purchaseInfo?: object;
}

