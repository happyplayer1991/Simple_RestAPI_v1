import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user = new User() ;
  submitted = false;
  message: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => {
        let birthday = new Date(user.birthday)
        delete user.birthday
        this.user = user
        this.user.birthday = { date: {year: birthday.getFullYear(), month: birthday.getMonth() + 1, day: birthday.getDate()} } 
      });
  }

  update(): void {
    this.submitted = true;
    this.userService.updateUser(this.user)
        .subscribe(result => this.message = "User Updated Successfully!");
  }

  delete(): void {
    this.submitted = true;
    this.userService.deleteUser(this.user.id)
        .subscribe(result => this.message = "User Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }

  getFormattedDate(dt)  {
    var date = new Date(dt);
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return year + '-' + month + '-' + day;
  }
    
  
}