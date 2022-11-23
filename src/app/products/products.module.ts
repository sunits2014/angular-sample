import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductWithIdComponent } from './product-with-id/product-with-id.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesComponent,
    ProductWithIdComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
