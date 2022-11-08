import { Component, OnInit } from '@angular/core';
import { SampleData } from '../constants/sample-data.constant';
import { IUser } from '../interfaces/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showButton: boolean;
  public sampleArray: Array<any>;
  public sampleObject: any;
  public colorChange: boolean;
  public view: string;
  public userData: IUser;

  constructor() { 
    this.sampleArray = [];
    this.view = 'user';
    this.userData = {} as IUser;
  }

  ngOnInit(): void {
    this.showButton = false;
    this.sampleArray = SampleData.sampleArray;
    this.sampleObject = SampleData.sampleObject;
    this.userData = SampleData.User;
  }

  public toggleColor() {
    this.colorChange = !this.colorChange;
  }

  public getSelectedTab(event) {
    this.view = event;
  }

  public getbtnClick(event) {
    alert(event);
  }

  public updateData(event) {
    this.userData.name = event.target.value;
  }

}
