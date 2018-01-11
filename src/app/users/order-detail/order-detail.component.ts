import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {OrderDetailService} from "./order-detail.service";
import {OrderDetail} from "./order-detail.model";
import {dicts} from "../../thurder-ng/models/dictionary";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  providers: [OrderDetailService]
})
export class OrderDetailComponent implements OnInit {

  constructor(private router:Router,
              private route: ActivatedRoute,
              private orderDetailService: OrderDetailService) { }

  orderDetailId: number
  orderDetail: OrderDetail
  orderStatus = dicts["ORDER_STATUS"]
  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => {
        console.log(params['id'])
        this.orderDetailId = params['id']
      }
    )

    this.getOrderDetail()
  }

  //获取订单详情
  getOrderDetail() {
    this.orderDetailService.getOrderDetail(10).subscribe(
      (detail) => {
        this.orderDetail = detail
      }
    )
  }

}
