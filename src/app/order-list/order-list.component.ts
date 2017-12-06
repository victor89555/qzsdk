import { Component, OnInit } from '@angular/core';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  providers: [OrderListService]
})
export class OrderListComponent implements OnInit {

  orderList: order[] = [];

  constructor(private service: OrderListService) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.service
      .getList()
      .then(orderList => this.orderList = [...this.orderList]);
  }

}
