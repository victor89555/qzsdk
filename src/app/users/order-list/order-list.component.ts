import { Component, OnInit } from '@angular/core';
import { Order, OrderLine } from "./order-list.model";
import { OrderListService } from "./order-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  providers: [OrderListService]
})

export class OrderListComponent implements OnInit {

  orders: Order[] = []
  beginTime: string = ''
  endTime: string = ''
  defaultImg = "./assets/img/jiucai.png"

  constructor(private orderListService: OrderListService,
              private router: Router) {}

  ngOnInit() {
    this.getOrderList(this.beginTime, this.endTime)
  }

  getOrderList(st, et) {
    this.orderListService.getAll(st, et).subscribe(
      (orders) => {
        // console.log(orders)
        this.orders = orders
      }
    )
  }

  getHistoryOrders() {
    console.log('获取历史订单')
    this.orders = []
    this.getOrderList(this.beginTime, this.endTime)
  }
  getThreeMonthOrders() {
    console.log('获取最近三个月订单')
    this.orders = []
    this.getOrderList(this.beginTime, this.endTime)
  }
  getHalfYearOrders() {
    console.log('获取最近半年订单')
    this.orders = []
    this.getOrderList(this.beginTime, this.endTime)
  }

  orderDetail(id) {
    this.router.navigateByUrl('users/detail/'+id)
  }
}
