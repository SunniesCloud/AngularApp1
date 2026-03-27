import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { UserBioComponent } from './components/user-bio/user-bio.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserStatusComponent,
    UserBioComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

