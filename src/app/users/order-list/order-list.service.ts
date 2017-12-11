import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Order } from "./order-list.model";
import 'rxjs/add/operator/map';
import { GET, Path, POST, Query, RebirthHttp } from "rebirth-http";
import { Page } from "../../thurder-ng/models/page.model";

@Injectable()
export class OrderListService extends RebirthHttp {

  constructor(http: HttpClient) {
    super(http);
  }

  // @GET("http://localhost:8000/api/orders")
  // query(@Query("name") name = "",@Query("pageNo") pageNo = 1,
  //       @Query("pageSize") pageSize = 10):Observable<Page<any>> {
  //   return null;
  // }

  @GET("http://localhost:8000/api/user/orders")
  getAll(): Observable<Order[]> {
    return null;
  }

}
