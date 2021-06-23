import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { KatalogasComponent } from './katalogas.component';
import { ProduktoSpecifikacijaComponent } from './produkto-specifikacija/produkto-specifikacija.component';
import { ProduktasVienetasComponent } from './produktas-vienetas/produktas-vienetas.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    KatalogasComponent,
    ProduktoSpecifikacijaComponent,
    ProduktasVienetasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
  ],
})
export class ShopModule { }
