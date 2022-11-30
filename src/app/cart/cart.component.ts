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
  public currencyType: string;
  public total: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.cartItems = [];
    this.currencyType = 'USD';
    this.total = 0;
  }

  ngOnInit(): void {
    Object.keys(this.activatedRoute.snapshot.data).forEach(item => {
      this.cartItems.push(this.activatedRoute.snapshot.data[item]);
    });
    this.calculateTotal();
  }

  private calculateTotal() {
    this.cartItems.forEach(item => {
      this.total = this.total + parseInt(item.price)
    })
  }

}
