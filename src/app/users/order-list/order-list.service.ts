import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Order } from "./order-list.model";
import 'rxjs/add/operator/map';
import { GET, Path, POST, Query, RebirthHttp } from "rebirth-http";

@Injectable()
export class OrderListService extends RebirthHttp {

  constructor(http: HttpClient) {
    super(http);
  }

  //获取用户订单列表
  @GET("members/orders")
  getAll(@Query("beginTime") beginTime: string = '', @Query("endTime") endTime: string = '',
         @Query("pageSize") pageSize: number = null, @Query("pageNum") pageNum: number = null): Observable<Order[]> {
    return null;
  }

}
