import { Injectable } from '@angular/core';
import {GET, Path, RebirthHttp} from "rebirth-http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {OrderDetail} from "./order-detail.model";

@Injectable()
export class OrderDetailService extends RebirthHttp{

  constructor(http: HttpClient) {
    super(http)
  }

  @GET("members/orders/:id")
  getOrderDetail(@Path("id") id:number = 10): Observable<OrderDetail> {
    return null
  }

}
