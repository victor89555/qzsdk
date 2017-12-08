import { Injectable } from '@angular/core';
import { Body, GET, Path, POST, Query, RebirthHttp } from "rebirth-http";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { UsersModule } from "../users.module";

@Injectable()
export class PersonalCenterService extends RebirthHttp {

  constructor(http: HttpClient) {
    super(http);
  }


}
