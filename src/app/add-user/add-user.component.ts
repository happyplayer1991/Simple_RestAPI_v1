import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent{

  user = new User();
  submitted = false;

  constructor(
    private userService: UserService,
    private location: Location
  ) { }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

 addUser() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.user);
    this.userService.addUser(this.user)
        .subscribe();
  }
}
