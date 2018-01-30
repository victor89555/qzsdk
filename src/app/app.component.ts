import {Component, ViewContainerRef} from '@angular/core';
import {AuthorizationService} from "rebirth-permission";
import {Router} from "@angular/router";
import {LoadingService} from "./core/loading/loading.service";
import {RebirthHttpProvider} from "rebirth-http";
import {environment} from '../environments/environment';
import {HttpErrorResponse} from '@angular/common/http';
import {WechatService} from "./shared/wechat.service";
import {ThurderNgConfig} from "./thurder-ng/support/thurder-ng-config";
import {StorageService} from "rebirth-storage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  showAlert: boolean = false;
  errText: string = ''

  private showAlertTest(err: string, time: number) {
    console.log(err)
    this.errText = err || "Error!"
    this.showAlert = true
    console.log("open")
    let timer = setTimeout(()=>{
      this.showAlert = false
      clearTimeout(timer)
    }, time || 3000)
  }

  private closeAlert() {
    this.showAlert = false
    console.log("close")
  }

  constructor(private authorizationService: AuthorizationService,
              private loadingService: LoadingService,
              private router: Router,
              private rebirthHttpProvider: RebirthHttpProvider,
              private wechatService: WechatService,
              private viewContainerRef: ViewContainerRef,
              private thurderNGConfig: ThurderNgConfig,
              private storageService: StorageService) {
    this.applicationSetup();
  }

  private applicationSetup() {
    this.thurderNGConfig.rootContainer = this.viewContainerRef;
    this.apiSetup();
  }

  private apiSetup() {
    this.rebirthHttpProvider
      .baseUrl(environment.api.host)
      .addInterceptor({
        request: () => {
          this.loadingService.show();
        },
        response: () => {
          this.loadingService.hide();
        }
      })
      .addInterceptor({
        request: (request) => {
          return request.clone({
            setHeaders: {
              "X-Requested-With": "XMLHttpRequest",
              // "Content-Type": "application/json"
            },
            withCredentials: true
          });
        }
      })
      .addInterceptor({
        request: (request) => {
          const currentUser = this.authorizationService.getCurrentUser();
          if (currentUser) {
            return request.clone({
              setHeaders: {
                Authorization: `Bearer ${currentUser.token }`
              }
            });
          }
        }
      })
      .addResponseErrorInterceptor((res: HttpErrorResponse) => {
        if ([401, 0].includes(res.status)) {
          let origin = window.location.origin
          const errCode = res.error.errCode
          if (errCode == "INVALID_MEMBER_TOKEN") {
            // 保存下当前的路由地址存入sessionStorage,当用户登录成功后跳转到该路由
            this.storageService.sessionStorage.setItem('locationHref', window.location.href.replace(origin, ''))
            window.location.href = this.wechatService.getMemberAuthUrl()
          } else if (errCode == "INVALID_OPERATOR_TOKEN") {
            // 保存下当前的路由地址存入sessionStorage,当用户登录成功后跳转到该路由
            this.storageService.sessionStorage.setItem('locationHref', window.location.href.replace(origin, ''))
            window.location.href = this.wechatService.getOperatorAuthUrl()
          }
          // this.router.navigateByUrl('/login');
        }
        if ([400].indexOf(res.status) !== -1) {
          console.log(res.error.msg)
          const errCode = res.error.errCode
          if (errCode == "NO_FOLLOW_MP") {
            //转到公众号关注页面
            this.router.navigateByUrl("/users/follow")
          } else if (errCode == "NOT_MEMBER") {
            //转到会员注册页面
            this.router.navigateByUrl("/users/register")
          } else if (errCode == "NOT_OPERATOR") {
            //转到商户绑定页面
            this.router.navigateByUrl("/shop/bind")
          }

          this.showAlertTest(res.error.msg, 5000)

        }
      });
  }

}


