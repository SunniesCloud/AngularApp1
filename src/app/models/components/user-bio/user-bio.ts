import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.html',
  styleUrls: ['./user-bio.css']
})
export class UserBioComponent {

  @Input() bio!: string;
  @Output() bioChange = new EventEmitter<string>();

  newBio = '';

  saveBio(){
    this.bioChange.emit(this.newBio);
    this.newBio = '';
  }

}