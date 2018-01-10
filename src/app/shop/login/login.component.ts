import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import {WechatService} from "../../shared/wechat.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private wechatService: WechatService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params) => {
        if (params["code"]) {
          const authCode = params["code"]
          // 通过授权码调用微信登录认证
          this.wechatService.operatorLogin(authCode).subscribe(
            (user) => this.router.navigateByUrl('/shop/list'),
            () => {
            })
        }
      }
    )
  }

}
