/**
 * Created by zhaixm on 2018/1/8.
 */
import {Injectable} from "@angular/core"
import {environment} from "../../environments/environment"
import {RebirthHttp} from "rebirth-http"
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs/Observable"
import {CurrentUser} from "./model/current-user.model"
import {AuthorizationService} from "rebirth-permission"
import {AuthResponse} from "./model/auth-response.model"

@Injectable()
export class WechatService extends RebirthHttp {

  private appId = environment.wechat.appId

  constructor(http: HttpClient,
              private authorizationService: AuthorizationService) {
    super(http)
  }

  getMemberAuthUrl() {
    const webHost = environment.web.host
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appId}&redirect_uri=${webHost + "/users/login"}&response_type=code&scope=snsapi_base&state=member#wechat_redirect`
  }

  memberLogin(code: string): Observable<CurrentUser> {
    return this.innerLogin("members/login", code).map(user => {
      this.authorizationService.setCurrentUser(user);
      return user;
    })
  }

  private innerLogin(loginPath, authCode): Observable<CurrentUser> {
    return this.http.post<CurrentUser>(`${environment.api.host}/${loginPath}?code=${authCode}`, {}, {headers: {"X-Requested-With": "XMLHttpRequest"}}).map((data: any) => {
      let currentUser = new CurrentUser()
      currentUser.id = data.userId
      currentUser.name = data.userName
      currentUser.token = data.token
      currentUser.roles = data.resources
      currentUser.headImgUrl = data.headImgUrl
      return currentUser
    })
  }

  getOperatorAuthUrl() {
    const webHost = environment.web.host
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appId}&redirect_uri=${webHost + "/shop/login"}&response_type=code&scope=snsapi_base&state=member#wechat_redirect`
  }

  operatorLogin(code: string): Observable<CurrentUser> {
    return this.innerLogin("operators/login", code).map(user => {
      this.authorizationService.setCurrentUser(user)
      return user;
    })
  }

}
