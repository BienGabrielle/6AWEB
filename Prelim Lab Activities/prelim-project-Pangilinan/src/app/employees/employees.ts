import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-employees',
  imports: [DecimalPipe],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {
  employees = [
    { empNo: 'E001', fullName: 'Malenia, Blade of Miquella', gender: 'Female', email: 'malenia@tarnished.com', status: 'Active', salary: 40000 },
    { empNo: 'E002', fullName: 'Starscourge Radahn', gender: 'Male', email: 'radahn@tarnished.com', status: 'Active', salary: 50000 },
    { empNo: 'E003', fullName: 'Sister Friede', gender: 'Female', email: 'friede@tarnished.com', status: 'On Leave', salary: 40000 },
    { empNo: 'E004', fullName: 'Slave Knight Gael', gender: 'Male', email: 'gael@tarnished.com', status: 'Active', salary: 50000 },
    { empNo: 'E005', fullName: 'Lady Maria', gender: 'Female', email: 'maria@tarnished.com', status: 'Resigned', salary: 40000 },
    { empNo: 'E006', fullName: 'Father Gascoigne', gender: 'Male', email: 'gascoigne@tarnished.com', status: 'Active', salary: 20000 },
    { empNo: 'E007', fullName: 'Isshin, the Sword Saint', gender: 'Male', email: 'isshin@tarnished.com', status: 'Active', salary: 20000 },
    { empNo: 'E008', fullName: 'Sir Alonne', gender: 'Male', email: 'alonnes@tarnished.com', status: 'Contract', salary: 10000 },
    { empNo: 'E009', fullName: 'Gwyn, Lord of Cinder', gender: 'Male', email: 'gwyn@tarnished.com', status: 'Contract', salary: 50000 },
  ];

  isHighSalary(salary: number) {
    return salary >= 80000;
  }
}
