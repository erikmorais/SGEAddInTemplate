
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import AppComponent from "./app.component";

import { AppRoutingModule } from './app-routing.module';
import NaveMenuComponent from './components/menu/nav-menu.component';
import WelcomeComponent from './components/welcome/welcome.component';



@NgModule({
  declarations: [AppComponent,WelcomeComponent,NaveMenuComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export default class AppModule {}
