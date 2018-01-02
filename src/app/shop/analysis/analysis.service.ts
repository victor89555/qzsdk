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
  getMarketTimeDay(@Query("beginTime") beginTime = "", @Query("endTime") endTime = "",
              @Query("dimension") dimension = 2): Observable<Market_Time_Day[]> {
    return null;
  }

  @GET("shop/analysis")
  getMarketTimeHour(@Query("beginTime") beginTime = "", @Query("endTime") endTime = "",
                   @Query("dimension") dimension = 2): Observable<Market_Time_Hour[]> {
    return null;
  }

  @GET("shop/analysis")
  getMarketShop(@Query("beginTime") beginTime = "", @Query("endTime") endTime = "",
                   @Query("dimension") dimension = 0): Observable<Market_Shop[]> {
    return null;
  }

  @GET("shop/analysis")
  getMarketProduct(@Query("beginTime") beginTime = "", @Query("endTime") endTime = "",
                   @Query("dimension") dimension = 1): Observable<Market_Product[]> {
    return null;
  }

}
