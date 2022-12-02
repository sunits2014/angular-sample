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

  private itemsInCart: Array<any>;

  constructor(
    private pubSubService: PubSubService,
    private router: Router
  ) {
    this.itemsInCart = [];
    this.pubSubService.cartItems.subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.addItemRecord(data)
      }
    })
  }

  ngOnInit(): void {
    this.getCartItems();
  }

  private getCartItems() {
    this.itemsInCart = JSON.parse(sessionStorage.getItem('cartItems'));
    if (this.itemsInCart) {
      if (this.itemsInCart.length > 0 ) {
        this.itemsInCart.forEach(item => {
          this.pubSubService.addCartIcon(item);
        });
        this.sendDataToCartComp();
      }
    }
  }

  private addItemRecord(data) {
    this.itemsInCart.push(data);
    this.sendDataToCartComp();
  }

  private sendDataToCartComp() {
    this.router.config.forEach(item => {
      if (item.path === 'cart') {
        item.data = this.itemsInCart;
      }
    })
  }
}
