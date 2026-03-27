import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent {
  @Input() isOnline!: boolean; // Input for current status
  @Input() userName!: string; // Input for user name
  @Output() statusChanged = new EventEmitter<boolean>(); // Output to notify parent of status change
  
  /**
   * Toggles the user's online status and emits the new value
   */
  toggleStatus(): void {
    this.isOnline = !this.isOnline;
    this.statusChanged.emit(this.isOnline);
  }
  

  getStatusMessage(): string {
    const timeOfDay = new Date().getHours();
    let greeting = '';
    
    if (timeOfDay < 12) greeting = 'Good morning';
    else if (timeOfDay < 18) greeting = 'Good afternoon';
    else greeting = 'Good evening';
    
    return `${greeting}, ${this.userName}!`;
  }
}
