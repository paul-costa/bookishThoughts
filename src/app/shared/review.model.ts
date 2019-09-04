export interface Review {
    ISBN: number,
    readinYear: number,
    tags: Array<string>,
    shortReview: string,
    mediumReview: string,	
    longReview: string,	
    ratingPlot: number,	
    ratingCharacters: number,	
    ratingCatchFactor: number,	
    recommendedISBN: Array<number>,	
    miscLinks: Array<string>,	
    fanartLinks: Array<string>,	
    dateAdded: string													
}