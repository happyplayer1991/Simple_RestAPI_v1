import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

const routes: Routes = [
   { 
     path: 'users', 
     component: UserComponent 
   },
   { 
     path: 'user/add', 
     component: AddUserComponent 
   },
   { 
     path: 'users/:id', 
     component: UserDetailsComponent 
   },
   { 
     path: '', 
     redirectTo: 'users', 
     pathMatch: 'full'
   }, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}