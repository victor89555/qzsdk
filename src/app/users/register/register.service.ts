import { Injectable } from '@angular/core';
import {Body, GET, POST, RebirthHttp} from "rebirth-http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RegisterService extends RebirthHttp{

  constructor(http: HttpClient) {
    super(http)
  }

  @POST("members/register")
  doRegister(@Body json:any): Observable<any> {
    return null
  }

  @GET("members/register")
  getInfo(): Observable<any> {
    return null
  }

}
