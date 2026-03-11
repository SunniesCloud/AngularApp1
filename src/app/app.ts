import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent {

  user: User = {
    name: "Rowena Sasi",
    bio: "Frontend developer learning Angular.",
    profilePicture: "/Users/rowenasasi/Downloads/photo dp.heic",
    online: true
  };

  toggleStatus(){
    this.user.online = !this.user.online;
  }

   updateBio(newBio:string){
    this.user.bio = newBio;
  }

}