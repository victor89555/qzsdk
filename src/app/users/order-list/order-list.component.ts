import { Component, OnInit } from '@angular/core';
import { Order, OrderLine } from "./order-list.model";
import { OrderListService } from "./order-list.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  providers: [OrderListService]
})

export class OrderListComponent implements OnInit {

  orders: Order[] = []

  constructor(private orderListService: OrderListService) {}

  ngOnInit() {
    this.getOrderList()
  }

  getOrderList() {
    this.orderListService.getAll().subscribe(
      (orders) => {
        this.orders = orders
      }
    )
  }

}
