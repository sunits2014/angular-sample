import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product.model';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Array<IProduct>;

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().then(response => {
      this.products = response;
    });
  }

}
