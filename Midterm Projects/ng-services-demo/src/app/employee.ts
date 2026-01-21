import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  getEmployees() {
    return [
      {
        id: 101,
        firstname: 'Jethro',
        lastname: 'Canlas',
        email: 'jcanlas@hau.edu.ph',
      },
      {
        id: 102,
        firstname: 'Chris',
        lastname: 'Naguit',
        email: 'cnaguit@hau.edu.ph',
      },
      {
        id: 103,
        firstname: 'Gab',
        lastname: 'Pangilinan',
        email: 'gpangilinan@hau.edu.ph',
      },
      {
        id: 104,
        firstname: 'JP',
        lastname: 'Gonzales',
        email: 'jgonzales@hau.edu.ph',
      },
    ];
  }
}
