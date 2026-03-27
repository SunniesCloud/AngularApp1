import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user!: User; // Input property to receive user data from parent
  @Input() isOnline!: boolean; // Input to receive online status
  
  /**
   * Returns the appropriate CSS class for the status indicator
   */
  getStatusClass(): string {
    return this.isOnline ? 'online' : 'offline';
  }
}