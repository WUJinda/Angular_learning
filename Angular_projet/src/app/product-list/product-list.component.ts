import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model'
import JsonProducts from '../../assets/products.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // same as User
  isOpen: boolean = false;
  itemSelected: Product | undefined;
  items: Product[] = [];
  constructor() { 
    this.items = JsonProducts;
  }

  ngOnInit(): void {
  }
  // format the Euro symbol
  formatPrice(price: number) {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  }

  openDialog(product : Product){
    this.itemSelected = product;
    this.isOpen = true;
  }
}
