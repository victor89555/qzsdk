import { Injectable } from '@angular/core';
import {RebirthHttp, GET, PUT, POST, DELETE, Query, Body} from "rebirth-http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class VcodeService extends RebirthHttp{

  constructor(http: HttpClient) {
    super(http)
  }

  @GET("sms/verifyCode")
  getVerifyCode(@Query("mobile") mobile: string): Observable<any>{
    return null
  }

  @POST("sms/verifyCode")
  checkVerifyCode(@Body json: any): Observable<any>{
    return null
  }

}
