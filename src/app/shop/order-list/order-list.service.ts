import { Injectable } from '@angular/core';
import { Body, GET, Path, POST, Query, RebirthHttp } from "rebirth-http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Order} from "./order-list.model";

@Injectable()
export class OrderListService extends RebirthHttp {

  constructor(http: HttpClient) {
    super(http)
  }

  @GET("shops/:shopId/orders")
  getOrders(@Path("shopId") shopId: number, @Query("beginTime") beginTime: string,
            @Query("endTime") endTime: string, @Query("pageSize") pageSize: number,
            @Query("pageNum") pageNum: number): Observable<Order[]> {
    return null
  }

}
