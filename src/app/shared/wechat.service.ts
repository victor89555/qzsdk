/**
 * Created by zhaixm on 2018/1/8.
 */
import {Injectable} from "@angular/core"
import {environment} from "../../environments/environment"

@Injectable()
export class WechatService {

  private appId = environment.wechat.appId

  getMemberAuthUrl() {
    const loginUrl = environment.member.loginUrl
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appId}&redirect_uri=${loginUrl}
      &response_type=code&scope=snsapi_base&state=member#wechat_redirect`
  }

  getOperatorAuthUrl() {
    const loginUrl = environment.shop.loginUrl
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appId}&redirect_uri=${loginUrl}
      &response_type=code&scope=snsapi_base&state=member#wechat_redirect`
  }

}
