import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
   new Quote("The greatest glory in living lies not in never falling, but in rising every time we fall", "Nelson Mandela", "Alvin"),
   new Quote("The way to get started is to quit talking and begin doing", "Walt Disney", "Jane")
  ];

  addNewQuote(quote: Quote){
    this.quotes.push(quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
