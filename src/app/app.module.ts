import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';

import { MyDatePickerModule } from 'mydatepicker'; //datepicker
import {IMyDpOptions} from 'mydatepicker';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MyDatePickerModule //datepicker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
