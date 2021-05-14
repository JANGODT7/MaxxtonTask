import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CandidateDetailsModule } from './candidateDetails/candidate-details/module/candidate-details.module';
import { SearchTextPipe } from './shared/service/pipe/search-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CandidateDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
