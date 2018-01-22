import { Component, OnInit } from '@angular/core';
import { Order, OrderLine } from "./order-list.model";
import { OrderListService } from "./order-list.service";
import {StorageService} from "rebirth-storage";
import {Router} from "@angular/router";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  providers: [OrderListService]
})

export class OrderListComponent implements OnInit {

  orders: Order[] = []
  shopId: number
  beginTime: string = "2017-12-01"
  endTime: string = "2017-12-31"
  pageSize: number = 10
  pageNum: number = 1
  isLastPage:boolean = false
  idLoading:boolean = false
  defaultImg = "./assets/img/jiucai.png"

  constructor(private orderListService: OrderListService,
              private storageService: StorageService,
              private router: Router,
              private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('订单列表')
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
    this.idLoading = true
    this.orderListService.getOrders(this.shopId, this.beginTime, this.endTime, this.pageSize, this.pageNum).subscribe(
      (orders) => {
        console.log(orders)
        this.idLoading = false
        if(this.pageNum > 1){
          this.orders.push(...orders)
        }else{
          this.orders = orders
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
}
