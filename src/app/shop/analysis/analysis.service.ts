import { Injectable } from '@angular/core';
import { Body, GET, Path, POST, Query, RebirthHttp } from "rebirth-http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Shop_Report} from "./analysis.model";


@Injectable()
export class AnalysisService extends RebirthHttp{

  constructor(http: HttpClient) {
    super(http)
  }

  @GET("shops/:shopId/report")
  query(@Path("shopId") shopId: number, @Query("dimension") dimension:number,
        @Query("beginTime") beginTime:string, @Query("endTime") endTime:string): Observable<Shop_Report[]> {
    return null;
  }

  getMarketProduct(shopId, beginTime, endTime): Observable<Shop_Report[]> {
    return this.query(shopId, 1, beginTime, endTime)
  }

  getMarketTimeDay(shopId, beginTime, endTime): Observable<Shop_Report[]> {
    return this.query(shopId, 2, beginTime, endTime)
  }



}
