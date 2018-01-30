import {Injectable} from '@angular/core';
import {Body, GET, POST, RebirthHttp} from "rebirth-http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BindService extends RebirthHttp {

  constructor(http: HttpClient) {
    super(http)
  }

  @POST("operators/bind")
  bindOperator(@Body json: any): Observable<any> {
    return null
  }

  @GET("operators/bind")
  getWXUser(): Observable<any> {
    return null
  }

}
