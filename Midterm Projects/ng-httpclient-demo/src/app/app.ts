import { Component } from '@angular/core';
import { UserService, User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected readonly title = 'ng-httpclient-demo';
  httpusers: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.httpusers = this.userService.getUsers();
  }
}
