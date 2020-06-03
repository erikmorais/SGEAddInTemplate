import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./app.component";
import WelcomeComponent from "./components/welcome.component";


@NgModule({
  declarations: [AppComponent,WelcomeComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export default class AppModule {}
