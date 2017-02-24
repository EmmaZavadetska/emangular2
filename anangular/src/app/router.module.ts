import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { LoginComponent } from "./login/login.component";


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: "" }
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],

  exports: [
    RouterModule
  ],


})
export class RoutingModule { }
