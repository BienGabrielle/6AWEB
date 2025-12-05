import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isStaticNoteVisible : boolean = false;
  isNoteVisible : boolean = true;
  isParagraphVisible  : boolean = false;
  monthNameStatic: string = 'Mar';
  monthNameDynamic: string = 'Mar';
  cityList: string[] = ['Angeles', 'San Fernando', 'Mabalacat', 'Mexico', 'Arayat'];
  hitList: any[] = [
    {name: 'Pangilinan', cause: 'Gunshot', isActive: false},
    {name: 'Delos Reyes', cause: 'Cardiac Arrest', isActive: false},
    {name: 'Magbitang', cause: 'Gunshot', isActive: false},
    {name: 'Salunga', cause: 'Gunshot', isActive: false},
    {name: 'Villanueva', cause: 'Gunshot', isActive: false},
  ];

  showNote() {
    this.isNoteVisible = true;
  }
  hideNote() {
    this.isNoteVisible = false;
  }
  toggleNote() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
