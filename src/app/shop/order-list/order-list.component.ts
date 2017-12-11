import { Component, OnInit } from '@angular/core';
import { Order, OrderLine } from "./order-list.model";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = []

  constructor() { }

  ngOnInit() {
    let order = new Order()
    order.marketName = '银翔鲜肉店'
    order.tradingTime = '2017-12-12 12:12'
    order.totalAmount = 34.5
    let orderLine = new OrderLine();
    orderLine.productName = '新鲜韭菜'
    orderLine.unitName = '斤'
    orderLine.qty = 5
    orderLine.totalAmount = 6.5
    orderLine.imgUrl = './assets/img/jiucai.png'
    order.orderLines.push(orderLine)
    let orderLine1 = new OrderLine();
    orderLine1.productName = '荷兰土豆'
    orderLine1.unitName = '颗'
    orderLine1.qty = 6
    orderLine1.totalAmount = 3.5
    orderLine1.imgUrl = './assets/img/tudou.png'
    order.orderLines.push(orderLine1)
    this.orders.push(order)
  }
}
