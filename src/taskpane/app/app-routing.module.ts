import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import WelcomeComponent from './components/welcome.component';

const routes: Routes = [
     { path: 'welcome', component: WelcomeComponent },
    // { path: 'addbook', component: AddBookComponent },
    // { path: 'addreader', component: AddReaderComponent },
    // { path: 'editreader/:id', component: EditReaderComponent },
    // { path: 'editbook/:id', component: EditBookComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  