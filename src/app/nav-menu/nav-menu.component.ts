import { Component, OnInit } from '@angular/core';
import { NavigationConstants } from '../constants/navigation.constants';
import { PubSubService } from '../services/common/publish-subscribe.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  public routes: Array<any>;
  public appName: string;
  public cartItems: number;

  constructor(
    private pubSubService: PubSubService
  ) { 
    this.cartItems = 0;
    this.routes = [];
    this.pubSubService.cartItems.subscribe(item => {
      if (Object.keys(item).length > 0) {
        this.cartItems++;
      }
    })
  }

  ngOnInit(): void {
    this.appName = NavigationConstants.APP_NAME;
    this.routes = NavigationConstants.NAV_MENU;
  }

}
