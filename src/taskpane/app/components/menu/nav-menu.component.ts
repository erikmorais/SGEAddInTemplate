import { Component } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
const template = require("./nav-menu.component.html");
/* global require */

@Component({
  selector: "seg-nav-menu",
  template
})
export default class NaveMenuComponent {


  userName = Office.context.mailbox.userProfile.displayName ;

  async run() {
    Office.initialize = () => {
   //   document.getElementById("sideload-msg").style.display = "none";
    
      this.userName   =  Office.context.mailbox.userProfile.displayName;
      // Bootstrap the app
      platformBrowserDynamic()
        .bootstrapModule(NaveMenuComponent)
        .catch(error => console.error(error));
    };
  
    //Office.context.mailbox.userProfile.
  }
}
