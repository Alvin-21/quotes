import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { TimePassedPipe } from './time-passed.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteFormComponent,
    QuoteDetailsComponent,
    TimePassedPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
