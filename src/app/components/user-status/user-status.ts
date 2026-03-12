import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.html',
  styleUrls: ['./user-status.css']
})
export class UserStatusComponent {

  @Input() online!: boolean;
  @Output() statusChange = new EventEmitter<void>();

  toggleStatus(){
    this.statusChange.emit();
  }

}