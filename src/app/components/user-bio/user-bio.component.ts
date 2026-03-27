import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.css']
})
export class UserBioComponent {
  @Input() bio: string = ''; 
  @Output() bioChanged = new EventEmitter<string>(); 
  
  isEditing: boolean = false; 
  editedBio: string = ''; 
  
  startEditing(): void {
    this.isEditing = true;
    this.editedBio = this.bio;
  }

  
  saveBio(): void {
    this.bio = this.editedBio;
    this.isEditing = false;
    this.bioChanged.emit(this.bio);
  }
  
  /**
   * Cancels editing without saving
   */
  cancelEditing(): void {
    this.isEditing = false;
    this.editedBio = this.bio;
  }
  getCharacterCount(): number {
    return this.bio.length;
  }
}
