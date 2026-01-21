import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { ProductService } from './product.service';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, DecimalPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('ng-services-demo');

 public employees: {
  id: number,
  firstname: string,
  lastname: string,
  email: string
}[] = [];

 public products: {
  id: string,
  name: string,
  description: string,
  price: number
}[] = [];

constructor(
  private _employeeService: Employee,
  private _productService: ProductService
) {}

ngOnInit() {
  this.employees = this._employeeService.getEmployees();
  this.products = this._productService.getProducts();
}

}







