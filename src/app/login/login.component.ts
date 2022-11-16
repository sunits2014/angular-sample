import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { JSONValues } from '../constants/json.constants';
import { SampleData } from '../constants/sample-data.constant';
import { IUser } from '../interfaces/user.model';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('user') user: UserComponent;
  @ViewChild('profile') profile: ProfileComponent;

  @ViewChildren('childUserItems') childUserItems: QueryList<UserComponent>;


  public showButton: boolean;
  public sampleArray: Array<any>;
  public sampleObject: any;
  public colorChange: boolean;
  public view: string;
  public userData: IUser;
  public date: Date;
  public currency: number;
  public currencyType: string;
  public jsonValues: any;
  public phoneModel: string;
  public brand: string;

  private currencyTypes: Array<string>


  constructor() { 
    this.sampleArray = [];
    this.view = 'user';
    this.userData = {} as IUser;
    this.date = new Date();
    this.currency = 10;
    this.currencyTypes = [];
  }

  ngOnInit(): void {
    this.currencyTypes = ['USD', 'EUR', 'GBP', 'INR'];
    this.showButton = false;
    this.sampleArray = SampleData.sampleArray;
    this.sampleObject = SampleData.sampleObject;
    this.userData = SampleData.User;
    this.jsonValues = JSONValues.JSON_DATA;
  }

  ngAfterViewInit(): void {
    console.log(this.user);
  }

  public toggleCurrency() {
    const index = Math.floor(Math.random()* this.currencyTypes.length);
    this.currencyType = this.currencyTypes[index];
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

  public clearString() {
    this.phoneModel = '';
  }

}
