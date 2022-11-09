import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input('userData') userData: IUser;

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm() {
    console.log(this.userData);
  }

}
