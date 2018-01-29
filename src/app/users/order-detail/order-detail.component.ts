import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {OrderDetailService} from "./order-detail.service";
import {OrderDetail} from "./order-detail.model";
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  providers: [OrderDetailService]
})
export class OrderDetailComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private orderDetailService: OrderDetailService,
              private titleService: Title) {
  }

  orderId: number
  orderRefId: string
  orderDetail: OrderDetail
  hideForm: boolean = false
  tips: string

  ngOnInit() {
    this.titleService.setTitle('订单详情')
    this.route.queryParams.subscribe((params: Params) => {
      console.log(params['orderId'])
      this.orderId = params['orderId']
      this.orderRefId = params['orderRefId']
    });

    this.getOrderDetail()
  }

  //获取订单详情
  getOrderDetail() {
    if (this.orderId) {
      this.orderDetailService.getOrderDetail(this.orderId).subscribe(
        (detail) => {
          console.log(detail)
          this.orderDetail = detail.order
        }
      )
    } else if (this.orderRefId) {
      this.orderDetailService.getOrderScanDetail(this.orderRefId).subscribe(
        (data) => {
          console.log(data)
          if (data.result) {
            this.orderDetail = data.order
          } else {
            // 隐藏表单内容  直接显示提示信息
            this.hideForm = true
            this.tips = data.msg
          }
        }
      )
    }
  }

}
