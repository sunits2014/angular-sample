import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }

// ngIf - rendering/derendering UI elements
// ngFor - iterate through arrays/objects in the html template
// ngSwitch - switch between views within the template
// ngClass - dynamically toggle classes based on conditions
// ngStyle - dynamically toggle styles based on conditions
