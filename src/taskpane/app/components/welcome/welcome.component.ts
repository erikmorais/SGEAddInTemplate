import { Component } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
const template = require("./welcome.component.html");
/* global require */

@Component({
  selector: "seg-welcome",
  template
})
export default class WelcomeComponent {

  welcomeMessage = "Welcome";

  userName = Office.context.mailbox.userProfile.displayName ;

  async run() {
    Office.initialize = () => {
      document.getElementById("sideload-msg").style.display = "none";
    
      this.userName   =  Office.context.mailbox.userProfile.displayName;
      // Bootstrap the app
      platformBrowserDynamic()
        .bootstrapModule(WelcomeComponent)
        .catch(error => console.error(error));
    };
  
    //Office.context.mailbox.userProfile.
  }
}
