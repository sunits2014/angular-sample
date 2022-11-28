import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product.model';
import { PubSubService } from 'src/app/services/common/publish-subscribe.service';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-with-id',
  templateUrl: './product-with-id.component.html',
  styleUrls: ['./product-with-id.component.css'],
  providers: [ErrorHandlerService]
})
export class ProductWithIdComponent implements OnInit {

  public product: IProduct;

  private productId: number;

  public currencyType: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private errorHandlerService: ErrorHandlerService,
    private pubSubService: PubSubService
  ) { 
    this.activatedRoute.params.subscribe(param => {
      this.productId = parseInt(param.productId);
    });
    this.currencyType = 'USD'
  }

  ngOnInit(): void {
    this.productService.getProductWithId(this.productId).then((response: IProduct) => {
      this.product = response;
    }).catch(error => {
      this.errorHandlerService.handleError(error);
    })
  }

  public navigateBackToProducts() {
    this.router.navigate(['']);
  }

  public addToCart() {
    this.pubSubService.addCartIcon(this.product);
  }

}
