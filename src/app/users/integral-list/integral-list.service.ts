import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Integral } from "./integral-list.model";
import 'rxjs/add/operator/map';
import { GET, Path, POST, Query, RebirthHttp } from "rebirth-http";
import {Page} from "../../thurder-ng/models/page.model";

@Injectable()
export class IntegralListService extends RebirthHttp {

  constructor(http: HttpClient) {
    super(http);
  }

  @GET("members/integrals")
  getAll(): Observable<Integral[]> {
    return null;
  }

}
