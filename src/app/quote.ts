export class Quote {
    like: number;
    dislike: number;
    date: Date;
    constructor (public quote: string, public author: string, public publisher: string){
        this.like = 0;
        this.dislike = 0;
        this.date = new Date();
    }
}
