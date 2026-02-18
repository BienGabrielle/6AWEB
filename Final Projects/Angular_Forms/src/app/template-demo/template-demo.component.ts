import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.css']
})
export class TemplateDemoComponent {
  title = 'Template Driven Demo';
  username = '';
  email = '';
  password = '';
  role = '';
  gender = '';
  status = '';
  comments = '';
  submitted = false;
  submittedData: any = null;

onSubmit(){
  this.submitted = true;
  this.submittedData = {
    username: this.username,
    email: this.email,
    password: this.password,
    role: this.role,
    gender: this.gender,
    status: this.status,
    comments: this.comments
  };
}

}
