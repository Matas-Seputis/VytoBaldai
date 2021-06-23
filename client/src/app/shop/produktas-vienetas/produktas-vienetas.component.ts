import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-produktas-vienetas',
  templateUrl: './produktas-vienetas.component.html',
  styleUrls: ['./produktas-vienetas.component.scss']
})
export class ProduktasVienetasComponent implements OnInit {
  @Input() product: IProduct
  
  constructor() { }

  ngOnInit(): void {
  }

}
