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
  beginTime: string = '2017-11-01'
  endTime: string = '2017-12-31'
  pageSize: number = 3
  pageNumber: number = 1
  isLastPage:boolean = false
  idLoading:boolean = false
  defaultImg = "./assets/img/jiucai.png"

  constructor(private orderListService: OrderListService,
              private router: Router) {}

  ngOnInit() {
    this.getOrderList()
  }

  loadMore() {
    this.getOrderList()
  }


  getOrderList() {
    this.idLoading = true
    this.orderListService.getAll(this.beginTime, this.endTime, this.pageSize, this.pageNumber).subscribe(
      (orders) => {
        console.log(orders)
        this.idLoading = false
        if(this.pageNumber > 1){
          this.orders.push(...orders)
        }else{
          this.orders = orders
        }

        if(orders.length < this.pageSize) {
          this.isLastPage = true
        }else {
          this.isLastPage = false
          this.pageNumber++
        }
      }
    )
  }

  getHistoryOrders() {
    console.log('获取历史订单')
    this.orders = []
    this.pageNumber = 1
    this.getOrderList()
  }
  getThreeMonthOrders() {
    console.log('获取最近三个月订单')
    this.orders = []
    this.pageNumber = 1
    this.getOrderList()
  }
  getHalfYearOrders() {
    console.log('获取最近半年订单')
    this.orders = []
    this.pageNumber = 1
    this.getOrderList()
  }

  orderDetail(id) {
    this.router.navigateByUrl('users/detail/'+id)
  }
}
