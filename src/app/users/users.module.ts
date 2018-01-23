import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { OrderListComponent } from './order-list/order-list.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { IntegralListComponent } from './integral-list/integral-list.component';
import { UsersComponent } from './users.component';
import { routes } from './users.routes';
import { RouterModule } from "@angular/router";
import { OrderDetailComponent } from './order-detail/order-detail.component';
import {InformationComponent} from "./information/information.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import { FollowWechatComponent } from './follow-wechat/follow-wechat.component';
import {WeUiModule} from "ngx-weui";
import {ThurderNGModule} from "../thurder-ng/thurder-ng.module";
import {DictConvertPipe} from "../thurder-ng/pipes/dict-convert.pipe";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ThurderNGModule,
    WeUiModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [
    UsersComponent,
    PersonalCenterComponent,
    OrderListComponent,
    TabListComponent,
    IntegralListComponent,
    OrderDetailComponent,
    InformationComponent,
    LoginComponent,
    RegisterComponent,
    FollowWechatComponent,
    DictConvertPipe
  ]
})
export class UsersModule {}
