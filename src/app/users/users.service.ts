import { Injectable } from '@angular/core';
import { User } from "./users.model";
import { UserInfo } from "./user.data";

@Injectable()
export class UsersService {

  constructor() {}

  getUser(): Promise<User[]> {
    return Promise.resolve(UserInfo);
  }

}
