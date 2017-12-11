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

  user = new UserInfo()

  constructor(
    private personalCenterService : PersonalCenterService
  ) { }

  ngOnInit() {
    this.getUserInfo()
  }

  getUserInfo() {
    this.personalCenterService.getAll().subscribe(
      (user) => {
        // console.log(user);
        this.user = user
      }
    )
  }

}
