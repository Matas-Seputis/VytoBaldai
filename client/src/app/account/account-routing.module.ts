import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrisijungtiComponent } from './prisijungti/prisijungti.component';

const routes: Routes = [
  {path: 'prisijungti', component: PrisijungtiComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
