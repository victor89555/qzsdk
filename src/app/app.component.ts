import {Component, ViewContainerRef} from '@angular/core';
import {AuthorizationService} from "rebirth-permission";
import {Router} from "@angular/router";
import {LoadingService} from "./core/loading/loading.service";
import {RebirthHttpProvider} from "rebirth-http";
import {environment} from '../environments/environment';
import {NotifyService, RebirthNGConfig} from 'rebirth-ng';
import {HttpErrorResponse} from '@angular/common/http';
import {WechatService} from "./shared/wechat.service"
import {WindowRef} from "./thurder-ng/support/window-ref.service"
import {ToastService} from "ngx-weui";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private rebirthNGConfig: RebirthNGConfig,
              private authorizationService: AuthorizationService,
              private viewContainerRef: ViewContainerRef,
              private loadingService: LoadingService,
              private router: Router,
              private rebirthHttpProvider: RebirthHttpProvider,
              private alertBoxService: NotifyService,
              private wechatService: WechatService,
              private winRef: WindowRef) {
    this.applicationSetup();
  }

  private applicationSetup() {
    this.rebirthNGConfig.rootContainer = this.viewContainerRef; // this.rebirthNGConfig.extend(REBIRTH_UI_I18N_ZHCN); i18n
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
            }
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
          const errCode = res.error.errCode
          if (errCode == "INVALID_MEMBER_TOKEN") {
            window.location.href = this.wechatService.getMemberAuthUrl()
          } else if (errCode == "INVALID_OPERATOR_TOKEN") {
            window.location.href = this.wechatService.getOperatorAuthUrl()
          }
          // this.router.navigateByUrl('/login');
        }
        if ([400].indexOf(res.status) !== -1) {
          console.log(res.error.msg)
          const errCode = res.error.errCode
          if (errCode == "NO_FOLLOW_MP") {
            //todo 转到公众号关注页面
            this.router.navigateByUrl("/user/follow")
          } else if (errCode == "NOT_MEMBER") {
            //todo 转到会员注册页面
            this.router.navigateByUrl("/user/register")
          } else if (errCode == "NOT_OPERATOR") {
            //todo 转到商户绑定页面
            this.router.navigateByUrl("/shop/bind")
          }

          this.alertBoxService.placement("top")
          this.alertBoxService.open({
            type: 'danger',
            html: res.error.msg || "Error！"
          }, 5000);

        }
      });
  }

}


