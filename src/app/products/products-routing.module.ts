import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductWithIdComponent } from './product-with-id/product-with-id.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: ':productId',
    component: ProductWithIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
