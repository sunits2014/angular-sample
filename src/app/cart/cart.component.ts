import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../interfaces/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartItems: Array<IProduct>;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.cartItems = [];
  }

  ngOnInit(): void {
    Object.keys(this.activatedRoute.snapshot.data).forEach(item => {
      this.cartItems.push(this.activatedRoute.snapshot.data[item]);
    });
  }

}
