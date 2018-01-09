import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {UsersModule} from './users/users.module';
import {routes} from "./app.routes";
import {RouterModule} from '@angular/router';
import {ShopModule} from "./shop/shop.module";
import {CoreModule} from "./core/core.module";
import {ThurderNGModule} from "./thurder-ng/thurder-ng.module";
import {NgxEchartsModule} from "ngx-echarts";
import {WechatService} from "./shared/wechat.service"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    UsersModule,
    ShopModule,
    ThurderNGModule,
    NgxEchartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    WechatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
