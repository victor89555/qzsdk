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

  @GET("user/orders")
  getAll(): Observable<Order[]> {
    return null;
  }

}
