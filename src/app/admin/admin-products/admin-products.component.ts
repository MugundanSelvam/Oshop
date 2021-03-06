import { ProductService } from './../../product.service';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$:Observable<any[]>;
  constructor(private productservice:ProductService) {
    this.products$=this.productservice.getAll().snapshotChanges();
  }

alerting(){
  alert("Configured to do nothing.. LOL :p");
}

  ngOnInit() {
   
  }

}
