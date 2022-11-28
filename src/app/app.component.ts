import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from './interfaces/product.model';
import { PubSubService } from './services/common/publish-subscribe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private cartItems: Array<IProduct>;

  constructor(
    private pubSubService: PubSubService,
    private router: Router
  ) {
    this.cartItems = [];
  }

  ngOnInit(): void {
    this.getCartItems();
  }

  private getCartItems() {
    this.cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    if (this.cartItems.length > 0 ) {
      this.cartItems.forEach(item => {
        this.pubSubService.addCartIcon(item);
      });
      this.sendDataToCartComp();
    }
  }

  private sendDataToCartComp() {
    this.router.config.forEach(item => {
      if (item.path === 'cart') {
        item.data = this.cartItems;
      }
    })
  }
}
