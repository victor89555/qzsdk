import { Injectable } from '@angular/core';
import {GET, Path, Query, RebirthHttp} from "rebirth-http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Water} from "./water-list.model";

@Injectable()
export class WaterListService extends RebirthHttp{

  constructor(http: HttpClient) {
    super(http)
  }

  @GET("shops/:shopId/tradingFlows")
  loadWaterList(@Path("shopId") shopId: number, @Query("beginTime") beginTime: string, @Query("endTime") endTime: string): Observable<Water[]> {
    return null
  }

}
