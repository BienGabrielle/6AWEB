import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyserviceService } from './myservice';
import { NewCmp } from './new-cmp/new-cmp';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewCmp],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  todaydate;
  componentproperty;
  constructor(private myservice:MyserviceService){
    this.todaydate = this.myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
}

