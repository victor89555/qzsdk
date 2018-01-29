import {Injectable} from '@angular/core';
import {GET, Path, Query, RebirthHttp} from "rebirth-http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {OrderDetail} from "./order-detail.model";

@Injectable()
export class OrderDetailService extends RebirthHttp {

  constructor(http: HttpClient) {
    super(http)
  }

  @GET("members/orders/:id")
  getOrderDetail(@Path("id") id: number): Observable<any> {
    return null
  }

  @GET("members/orders/scan")
  getOrderScanDetail(@Query("refId") refId: string): Observable<any> {
    return null
  }

}
