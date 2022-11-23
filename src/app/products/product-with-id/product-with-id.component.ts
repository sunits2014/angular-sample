import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-with-id',
  templateUrl: './product-with-id.component.html',
  styleUrls: ['./product-with-id.component.css']
})
export class ProductWithIdComponent implements OnInit {

  private productId: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) { 
    this.activatedRoute.params.subscribe(param => {
      this.productId = parseInt(param.productId);
    })
  }

  ngOnInit(): void {
    this.productService.getProductWithId(this.productId).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error)
    })
  }

  public navigateBackToProducts() {
    this.router.navigate(['']);
  }

}
