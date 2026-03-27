import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  // Sample user data
  user: User = {
    id: 1,
    name: 'Sarah Johnson',
    age: 28,
    email: 'sarah.j@example.com',
    profilePicture: 'https://i.pravatar.cc/150?u=sarah',
    isOnline: true,
    bio: 'Passionate software developer with a love for creating beautiful user interfaces. When not coding, you can find me hiking or experimenting with new recipes.',
    location: 'San Francisco, CA',
    occupation: 'Senior Frontend Developer',
    joinDate: new Date('2023-01-15')
    };
  
  lastUpdated: Date = new Date();
  
  ngOnInit(): void {
    this.updateLastUpdated();
  }
  
  
  onStatusChanged(newStatus: boolean): void {
    this.user.isOnline = newStatus;
    this.updateLastUpdated();
    console.log(`Status changed to: ${newStatus ? 'Online' : 'Offline'}`);
  }
  
  
  onBioChanged(newBio: string): void {
    this.user.bio = newBio;
    this.updateLastUpdated();
    console.log('Bio updated:', newBio);
  }
  
  
  private updateLastUpdated(): void {
    this.lastUpdated = new Date();
  }
  
  
  getCurrentDate(): Date {
    return new Date();
  }
}