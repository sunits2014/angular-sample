import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from './add-user.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AddUserRoutingModule
  ]
})
export class AddUserModule { }
