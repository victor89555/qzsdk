import { Component, OnInit } from '@angular/core';
import { UserInfo } from "./personal-center.model";
import { PersonalCenterService } from "./personal-center.service";

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css'],
  providers: [PersonalCenterService]
})
export class PersonalCenterComponent implements OnInit {

  userId: number = 55
  user: UserInfo
  defaultImgUrl: string = "http://wx.qlogo.cn/mmopen/xbIQx1GRqdvyqkMMhEaGOX802l1CyqMJNgUzKP8MeAeHFicRDSnZH7FY4XB7p8XHXIf6uJA2SCunTPicGKezDC4saKISzRj3nz/0"

  constructor(
    private personalCenterService : PersonalCenterService
  ) { }

  ngOnInit() {
    this.getUserInfo(this.userId)
  }

  getUserInfo(id) {
    // console.log(id)
    this.personalCenterService.getAll(id).subscribe(
      (user) => {
        // console.log(user)
        this.user = user
      }
    )
  }

}
