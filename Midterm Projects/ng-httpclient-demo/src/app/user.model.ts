export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): User[] {
    return [
      {
        id: 1,
        name: 'Gabrielle Pangilinan',
        username: 'Gab',
        email: 'Gab@gmail.com',
        website: 'Gabo.org',
      },
      {
        id: 2,
        name: 'Chris Naguit',
        username: 'Chris',
        email: 'Chris@gmail.com',
        website: 'Chris.net',
      },
      {
        id: 3,
        name: 'JP Gonzales',
        username: 'JP',
        email: 'JP@gmail.com',
        website: 'JP.net',
      },
      {
        id: 4,
        name: 'Oliver Sazon',
        username: 'Oliver',
        email: 'Oliver@gmail.com',
        website: 'Oliver.net',
      },
      {
        id: 5,
        name: 'Mathew Venzon',
        username: 'Mathew',
        email: 'Mathew@gmail.com',
        website: 'Mathew.net',
      },
      {
        id: 6,
        name: 'Andrei Pangilinan',
        username: 'Andrei',
        email: 'Andrei@gmail.com',
        website: 'Andrei.net',
      },
      {
        id: 7,
        name: 'Kyle Lising',
        username: 'Kyle',
        email: 'Kyle@gmail.com',
        website: 'Kyle.net',
      },
      {
        id: 8,
        name: 'Micko De Dios',
        username: 'Micko',
        email: 'Micko@gmail.com',
        website: 'Micko.net',
      },
      {
        id: 9,
        name: 'Royce Simbillo',
        username: 'Royce',
        email: 'Royce@gmail.com',
        website: 'Royce.net',
      },
      {
        id: 10,
        name: 'Joseph Esquivel',
        username: 'Joseph',
        email: 'Joseph@gmail.com',
        website: 'Joseph.net',
      },
    ];
  }
}
