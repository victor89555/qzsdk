import { Component, OnInit } from '@angular/core';
import { Order, OrderLine } from "./order-list.model";
import { OrderListService } from "./order-list.service";
import {Page} from "../../thurder-ng/models/page.model";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  providers: [OrderListService]
})

export class OrderListComponent implements OnInit {

  orders: Order[] = []
  orderLines: OrderLine[] = []
  // page: Page<any> = new Page()
  // qry_name: string = ""
  // qry_code: string = ""

  constructor(
    private orderListService: OrderListService
  ) {}

  ngOnInit() {
    this.getOrderList()
  }

  getOrderList(){
    // console.log("getOrderList")
    this.orderListService.getAll().subscribe(
      (orders) => {
        // console.log(orders)
        this.orders = orders
      }
    )
  }

  // query() {
  //   this.orderListService.query(this.qry_name, this.page.pageNo).subscribe(
  //     (page) => {
  //       this.page = page
  //     }
  //   )
  // }

}
