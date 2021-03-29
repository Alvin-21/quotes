import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall", author: "Nelson Mandela", publisher: "Alvin"},
    {quote: "The way to get started is to quit talking and begin doing", author: "Walt Disney", publisher: "Jane"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}