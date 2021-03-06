import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() addQuote = new EventEmitter<Quote>();

  quote!: string;
  publisher!: string;
  author!: string;
  newQuote!: Quote;

  submitQuote() {
    this.newQuote = new Quote(this.quote, this.author, this.publisher);
    this.quote = "";
    this.author = "";
    this.publisher = "";
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
