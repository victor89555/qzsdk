import { Injectable } from '@angular/core';
import { Body, GET, Path, POST, Query, RebirthHttp } from "rebirth-http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Shop} from "./shop-list.model";

@Injectable()
export class ShopListService extends RebirthHttp{

  constructor(http: HttpClient) {
    super(http)
  }

  @GET("shops")
  getShops(@Query("operatorId") operatorId: number): Observable<Shop[]> {
    return null;
  }

}
