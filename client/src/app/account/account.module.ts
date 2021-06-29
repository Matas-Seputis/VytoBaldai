import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { PrisijungtiComponent } from './prisijungti/prisijungti.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PrisijungtiComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
