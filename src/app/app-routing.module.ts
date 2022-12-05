import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserModule } from './add-user/add-user.module';
import { CartModule } from './cart/cart.module';
import { LoginModule } from './login/login.module';
import { ProductsModule } from './products/products.module';
import { ProfileModule } from './profile/profile.module';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login-routing.module').then(m => LoginModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./add-user/add-user.module').then(m => AddUserModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => ProductsModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => CartModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => ProfileModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
