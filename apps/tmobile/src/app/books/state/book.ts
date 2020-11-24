/* Defines the Book entity */
export interface Book {
    kind: string;
    totalItems: number;
    items: BookItem[];
}

export interface BookItem{
    kind : string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: {
        title : string,
        description : string,
        imageLinks : {
            smallThumbnail : string
            thumbnail : string
        },
        publisher: string
    };
    saleInfo: object;
    accessInfo:object;
    searchInfo: object;
    purchaseInfo?: object;
}

