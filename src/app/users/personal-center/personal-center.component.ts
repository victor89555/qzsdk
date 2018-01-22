import { Component, OnInit } from '@angular/core';
import { UserInfo } from "./personal-center.model";
import { PersonalCenterService } from "./personal-center.service";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css'],
  providers: [PersonalCenterService]
})
export class PersonalCenterComponent implements OnInit {

  user: UserInfo
  defaultImgUrl: string = "../assets/img/默认头像.png"

  constructor(private personalCenterService : PersonalCenterService,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('个人中心')
    this.getUserInfo()
  }

  getUserInfo() {
    // console.log(id)
    this.personalCenterService.getPersonalInfo().subscribe(
      (user) => {
        // console.log(user)
        this.user = user
      }
    )
  }

}
