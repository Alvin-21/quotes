import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [];

  addNewQuote(quote: Quote){
    this.quotes.push(quote);
  }

  likes: number[] = [];

  like(i: number){
    this.quotes[i].like += 1;
    this.likes.push(this.quotes[i].like);
  }

  highestLike: any = Math.max(...this.likes);

  dislike(i: number){
    this.quotes[i].dislike += 1;
  }

  removeQuote(i: number){
    this.quotes.splice(i, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
