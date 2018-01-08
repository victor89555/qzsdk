import { Injectable } from '@angular/core';
import { Body, GET, Path, POST, Query, RebirthHttp } from "rebirth-http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Market_Product, Market_Shop, Market_Time_Day, Market_Time_Hour} from "./analysis.model";


@Injectable()
export class AnalysisService extends RebirthHttp{

  constructor(http: HttpClient) {
    super(http)
  }

  @GET("shop/analysis")
  query(@Query("beginTime") beginTime:string = "", @Query("endTime") endTime:string = "",
        @Query("dimension") dimension:number = null): Observable<any[]> {
    return null;
  }

  getMarketShop(beginTime, endTime): Observable<Market_Shop[]> {
    return this.query(beginTime, endTime, 0)
  }

  getMarketProduct(beginTime, endTime): Observable<Market_Product[]> {
    return this.query(beginTime, endTime, 1)
  }

  getMarketTimeDay(beginTime, endTime): Observable<Market_Time_Day[]> {
    return this.query(beginTime, endTime, 2)
  }



}
