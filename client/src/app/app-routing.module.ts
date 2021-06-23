import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagrindinisComponent } from './home/pagrindinis.component';
import { KatalogasComponent } from './shop/katalogas.component';
import { ProduktoSpecifikacijaComponent } from './shop/produkto-specifikacija/produkto-specifikacija.component';

const routes: Routes = [
  {path: '', component: PagrindinisComponent},
  {path: 'katalogas', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
