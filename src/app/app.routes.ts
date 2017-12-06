import { Routes, RouterModule } from '@angular/router';
import { PersonalCenterComponent } from "./personal-center/personal-center.component";
import { OrderListComponent } from "./order-list/order-list.component";
import { IntegralListComponent } from "./integral-list/integral-list.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal',
    pathMatch: 'full'
  },
  {
    path: 'personal',
    component: PersonalCenterComponent,
    data: {
      title: '个人中心'
    }
  },
  {
    path: 'order',
    component: OrderListComponent,
    data: {
      title: '订单列表'
    }
  },
  {
    path: 'integral',
    component: IntegralListComponent,
    data: {
      title: '积分列表'
    }
  }
];

export const routing = RouterModule.forRoot(routes);
