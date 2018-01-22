import { Component, OnInit } from '@angular/core';
import { Order, OrderLine } from "./order-list.model";
import { OrderListService } from "./order-list.service";
import {Router} from "@angular/router";
import {formatDate} from "../../thurder-ng/utils/date-util";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  providers: [OrderListService]
})

export class OrderListComponent implements OnInit {

  orders: Order[] = []
  nowDate = new Date().getTime()
  beginTime: string
  endTime: string
  pageSize: number = 10
  pageNumber: number = 1
  isLastPage:boolean = false
  idLoading:boolean = false
  defaultImg = "./assets/img/jiucai.png"

  constructor(private orderListService: OrderListService,
              private router: Router,
              private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('订单列表')
    // 默认获取三个月订单
    this.getThreeMonthOrders()
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
    this.beginTime = null
    this.endTime = formatDate(new Date(this.threeMonthAgo().getTime() - 86400000), 'yyyy-MM-dd')
    // this.endTime = formatDate(this.threeMonthAgo(), 'yyyy-MM-dd')
    this.pageNumber = 1
    this.getOrderList()
  }
  getThreeMonthOrders() {
    console.log('获取最近三个月订单')
    this.orders = []
    this.beginTime = formatDate(this.threeMonthAgo(), 'yyyy-MM-dd')
    this.endTime = formatDate(new Date(this.nowDate), 'yyyy-MM-dd')
    this.pageNumber = 1
    this.getOrderList()
  }

  orderDetail(id) {
    this.router.navigateByUrl('users/detail/'+id)
  }

  threeMonthAgo() {
    let now = new Date(this.nowDate)
    let year: number = now.getFullYear()
    let month: number = now.getMonth() + 1 - 3
    let date: number = now.getDate()
    month < 1 && year-- && (month += 12)
    return new Date(year.toString() + '-' + month.toString() + '-' + date.toString())
  }
}
