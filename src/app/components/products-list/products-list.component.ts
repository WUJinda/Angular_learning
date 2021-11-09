import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [
    {
      id: 1,
      name: "iPhone XIII",
      price: 1399,
      description: "new iPhone of Apple"

    },
    {
      id: 2,
      name: "Air pods pro",
      price: 399,
      description: "air pods pro of Apple"
    },
    {
      id: 3,
      name: "Macbook 2021",
      price: 3399,
      discount: "20%",
      description: "new Mac of Apple"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
