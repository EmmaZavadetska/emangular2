import { Component } from "@angular/core";

@Component({
  selector: "home",
  template: `<a routerLink="/home" routerLinkActive="active">Home</a>
<a routerLink="/skills" routerLinkActive="active">Skills</a>
<a routerLink="/contacts" routerLinkActive="active">Contacts</a>`
})


export class HomeComponent {}
