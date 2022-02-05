import { Component, OnInit } from '@angular/core';
import { Order } from "../model/order.model";
import JsonOrder from "../../assets/orders.json";
import JsonProducts from '../../assets/products.json';
import UserJson from "../../assets/users.json"
import { Product } from '../model/product.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {


  orders: Order[] = [];
  products: Product[] = [];
  users: User[] = [];

  isOpen: boolean = false;
  oderSelected: Order | undefined;

  constructor() { 
    this.users = UserJson
    this.products = JsonProducts
    // add all oreders
    for(const order of JsonOrder) {
      this.orders.push({
        id: order.id,
        user: this.users.find((u) => u.id === order.user_id)!,
        products: this.products.filter((p) => order.products_id.includes(p.id)),
      })
    }
  }

  ngOnInit(): void {
  }
  
  formatPrice(price: number) {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  }

  openDialog(order: Order){
    this.oderSelected = order;
    this.isOpen = true;
  }
}
