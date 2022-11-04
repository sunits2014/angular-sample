import { Component, OnInit } from '@angular/core';
import { SampleData } from '../constants/sample-data.constant';

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

  constructor() { 
    this.sampleArray = [];
  }

  ngOnInit(): void {
    this.showButton = false;
    this.sampleArray = SampleData.sampleArray;
    this.sampleObject = SampleData.sampleObject;
  }

  public toggleColor() {
    this.colorChange = !this.colorChange;
  }

}
