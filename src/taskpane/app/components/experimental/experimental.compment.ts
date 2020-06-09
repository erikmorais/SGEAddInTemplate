import { Component } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
const template = require("./experimental.compment.html");
/* global require */

@Component({
  selector: "experimental",
  template
})
export default class ExperimentalComponent {


  userName = Office.context.mailbox.userProfile.displayName ;

  async run() {
    Office.initialize = () => {
   //   document.getElementById("sideload-msg").style.display = "none";
    
      this.userName   =  Office.context.mailbox.userProfile.displayName;
      // Bootstrap the app
      platformBrowserDynamic()
        .bootstrapModule(ExperimentalComponent)
        .catch(error => console.error(error));
    };
  
    //Office.context.mailbox.userProfile.
  }
}
