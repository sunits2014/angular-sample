import { Component, OnInit } from '@angular/core';
import { NavigationConstants } from '../constants/navigation.constants';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  public routes: Array<any>;
  public appName: string;

  constructor() { 
    this.routes = [];
  }

  ngOnInit(): void {
    this.appName = NavigationConstants.APP_NAME;
    this.routes = NavigationConstants.NAV_MENU;
  }

}
