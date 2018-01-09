import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(private router:Router,
              private route: ActivatedRoute) { }

  orderDetailId: number

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

  }

}
