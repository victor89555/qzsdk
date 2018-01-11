import { Injectable } from '@angular/core';
import {Body, PUT, RebirthHttp} from "rebirth-http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UserInfo} from "../personal-center/personal-center.model";

@Injectable()
export class InfomationService extends RebirthHttp{

  constructor(http: HttpClient) {
    super(http)
  }

  @PUT("members/update")
  updateInformation(@Body json: any): Observable<any> {
    return null
  }

}
