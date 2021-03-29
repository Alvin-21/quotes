import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes: Quote[] = [
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall", author: "Nelson Mandela", publisher: "Alvin"},
    {quote: "The way to get started is to quit talking and begin doing", author: "Walt Disney", publisher: "Jane"}
  ];

}
