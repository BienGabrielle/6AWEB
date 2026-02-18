import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, JsonPipe],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.css'
})
export class CustomFormComponent {
  courses = ['BSIT', 'BSCS', 'BSIS', 'BSEMC'];
  years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  form!: FormGroup;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      studentNumber: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      course: ['', Validators.required],
      year: ['', Validators.required],
      gender: ['', Validators.required],
      remarks: ['']
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.submittedData = this.form.value;
    }
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.touched && control?.invalid;
  }
}
