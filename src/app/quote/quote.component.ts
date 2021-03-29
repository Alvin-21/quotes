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

  constructor() { }

  ngOnInit(): void {
  }

}
