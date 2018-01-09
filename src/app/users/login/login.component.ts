import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params) => {
        if (params["code"]) {
          const authCode = params["code"]
          //todo 通过授权码调用微信登录认证
        }
      }
    )
  }

}
