import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.model';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Array<IProduct>;
  public categorySpecificData: Array<IProduct>;
  public categories: Array<string>;

  constructor(
    private productService: ProductsService
  ) { 
    this.products = [];
    this.categories = [];
    this.categorySpecificData = [];
  }

  ngOnInit(): void {
    forkJoin(this.productService.getProducts(),this.productService.getCategories()).subscribe((responseList: Array<any>) => {
      this.products = responseList[0];
      this.categories = responseList[1];
    })
  }

  public getSelectedCategory(event: any) {
    if (event.isChecked) {
      this.productService.getInCategory(event.category).then((response: any) => {
        if (this.categorySpecificData.length > 0) {
          response.forEach(item => {
            this.categorySpecificData.push(item);
          })
        } else {
          this.categorySpecificData = response;
        }
      })
    } else {
      if (this.categorySpecificData.length > 0) {
        this.categorySpecificData.forEach(item => {
          if (item.category === event.category) {
            this.categorySpecificData.splice(this.categorySpecificData.indexOf(item), 1);
          }
        })
      }
    }
  }

}
