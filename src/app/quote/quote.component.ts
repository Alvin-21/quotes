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

  like(i: number){
    this.quotes[i].like += 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
