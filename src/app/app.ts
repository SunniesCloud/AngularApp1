import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  user: User = {
    name: "Rowena Sasi",
    bio: "Student learning Angular and frontend development.",
    profilePicture: "/Users/rowenasasi/Downloads/ametrine.jpeg",
    online: true
  };

  toggleStatus(){
    this.user.online = !this.user.online;
  }

  updateBio(newBio: string){
    this.user.bio = newBio;
  }

}