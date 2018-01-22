import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import {WechatService} from "../../shared/wechat.service"
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private wechatService: WechatService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('登录')
    this.route.queryParams.subscribe(
      (params) => {
        if (params["code"]) {
          const authCode = params["code"]
          // 通过授权码调用微信登录认证
          this.wechatService.memberLogin(authCode).subscribe(
            (user) => {
              //todo 应该进入用户最初访问的地址
              this.router.navigateByUrl('/users/perondal')
            },
            () => {
            })
        }
      }
    )
  }

}
