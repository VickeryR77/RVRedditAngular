
export interface Listing {
    kind: string;
    data: ListingData;
}

export interface ListingData {
    after: string;
    before: string;
    dist: number;
    children: PostData[];
}

export interface PostData {
    kind: string;
    data: PostDetails;
}

export interface PostDetails {
    title: string;
    thumbnail: string;
    over_18: boolean;
    permalink: string;
}









