import {Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {PersonalCenterComponent} from './personal-center/personal-center.component';
import {OrderListComponent} from './order-list/order-list.component';
import {IntegralListComponent} from './integral-list/integral-list.component';
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import {LoginComponent} from "./login/login.component"
import {RegisterComponent} from "./register/register.component";
import {InformationComponent} from "./information/information.component";
import {FollowWechatComponent} from "./follow-wechat/follow-wechat.component";

export const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'personal'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'personal',
        component: PersonalCenterComponent
      },
      {
        path: 'information',
        component: InformationComponent
      },
      {
        path: 'orders',
        component: OrderListComponent
      },
      {
        path: 'detail/:id',
        component: OrderDetailComponent
      },
      {
        path: 'integral',
        component: IntegralListComponent
      },
      {
        path: 'follow',
        component: FollowWechatComponent
      }
    ]
  }
];

