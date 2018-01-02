import {Component, ViewContainerRef} from '@angular/core';
import {AuthorizationService} from "rebirth-permission";
import {Router} from "@angular/router";
import {LoadingService} from "./core/loading/loading.service";
import {RebirthHttpProvider} from "rebirth-http";
import {environment} from '../environments/environment';
import {NotifyService, RebirthNGConfig} from 'rebirth-ng';
import {HttpErrorResponse} from '@angular/common/http';

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
              private alertBoxService: NotifyService) {
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
        if ([401, 403, 0].includes(res.status)) {
          this.router.navigateByUrl('/login');
        }
        if ([400].indexOf(res.status) !== -1) {
          console.log(res.error.msg)

          this.alertBoxService.placement("top")
          this.alertBoxService.open({
            type: 'danger',
            html: res.error.msg || "Error！"
          }, 5000);
        }
      });
  }

}


