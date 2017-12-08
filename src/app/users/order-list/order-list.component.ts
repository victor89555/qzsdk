import { Component, OnInit } from '@angular/core';
import { OrderListService } from './order-list.service';
import { OrderList } from './order-list.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent implements OnInit {

  constructor() { }

  orders: OrderList[] = [];

  ngOnInit() {
    // this.getList();
  }
  //
  // getList(): void {
  //   this.service
  //     .getList()
  //     .then(orders => orders = orders);
  // }

}
