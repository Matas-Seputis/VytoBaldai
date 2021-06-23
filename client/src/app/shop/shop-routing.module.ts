import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KatalogasComponent } from './katalogas.component';
import { ProduktoSpecifikacijaComponent } from './produkto-specifikacija/produkto-specifikacija.component';

const routes: Routes = [
  {path: '', component: KatalogasComponent},
  {path: ':id', component: ProduktoSpecifikacijaComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule { }
