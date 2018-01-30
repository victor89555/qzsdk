import { Component, OnInit } from '@angular/core';
import { Order, OrderLine } from "./order-list.model";
import { OrderListService } from "./order-list.service";
import {StorageService} from "rebirth-storage";
import {Router} from "@angular/router";
import { Title } from '@angular/platform-browser';
import {formatDate} from "../../thurder-ng/utils/date-util";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  providers: [OrderListService]
})

export class OrderListComponent implements OnInit {

  orders: Order[] = []
  shopId: number
  nowTime = new Date().getTime()
  beginTime: string
  endTime: string
  pageSize: number = 10
  pageNum: number = 1
  isLastPage:boolean = false
  isLoading:boolean = false
  isEmpty: boolean = false
  defaultImg = "./assets/img/default1.png"

  constructor(private orderListService: OrderListService,
              private storageService: StorageService,
              private router: Router,
              private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('订单列表')
    this.beginTime = formatDate(this.threeMonthAgo(), 'yyyy-MM-dd')
    this.endTime = formatDate(new Date(this.nowTime), 'yyyy-MM-dd')
    this.shopId = parseInt(this.storageService.sessionStorage.getItem("shopId"))
    if(!this.shopId) {this.router.navigate(['shop/list'])}
    else{
      this.getOrderList()
    }
  }

  loadMore() {
    this.getOrderList()
  }

  reLoad() {
    this.pageNum = 1;
    this.getOrderList()
  }

  getOrderList() {
    this.isLoading = true
    this.orderListService.getOrders(this.shopId, this.beginTime, this.endTime, this.pageSize, this.pageNum).subscribe(
      (orders) => {
        console.log(orders)
        this.isLoading = false
        if(this.pageNum > 1){
          this.orders.push(...orders)
        }else{
          this.orders = orders
          if(orders.length == 0){
            this.isEmpty = true
          }else {
            this.isEmpty = false
          }
        }

        if(orders.length < this.pageSize) {
          this.isLastPage = true
        }else {
          this.isLastPage = false
          this.pageNum++
        }
      }
    )
  }

  threeMonthAgo() {
    let now = new Date(this.nowTime)
    let year: number = now.getFullYear()
    let month: number = now.getMonth() + 1 - 3
    let date: number = now.getDate()
    month < 1 && year-- && (month += 12)
    return new Date(year.toString() + '-' + month.toString() + '-' + date.toString())
  }
}
