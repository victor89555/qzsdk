import { Injectable } from '@angular/core';
import { Body, GET, Path, POST, Query, RebirthHttp } from "rebirth-http";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { UsersModule } from "../users.module";
import { UserInfo } from "./personal-center.model";
import 'rxjs/add/operator/map';
import { Page } from "../../thurder-ng/models/page.model";

@Injectable()
export class PersonalCenterService extends RebirthHttp {

  constructor(http: HttpClient) {
    super(http);
  }

  @GET("http://localhost:8000/api/user/info")
  getAll(): Observable<UserInfo> {
    return null;
  }


}
