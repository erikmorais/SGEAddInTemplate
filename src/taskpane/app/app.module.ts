
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import AppComponent from "./app.component";
import WelcomeComponent from "./components/welcome.component";
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent,WelcomeComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export default class AppModule {}
