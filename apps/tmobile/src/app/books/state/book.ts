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

