import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product.model';
import { PubSubService } from '../services/common/publish-subscribe.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartItems: Array<IProduct>;

  constructor(
    private pubSubService: PubSubService
  ) { 
    this.cartItems = [];
    this.cartItems = this.pubSubService.cartItems.value;
    console.log(this.cartItems);
  }

  ngOnInit(): void {
  }

}
