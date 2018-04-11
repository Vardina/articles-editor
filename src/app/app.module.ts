import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { StylingComponent } from './styling.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StylingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
