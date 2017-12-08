import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { OrderListComponent } from './order-list/order-list.component';
import { IntegralListComponent } from './integral-list/integral-list.component';

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
        path: 'personal',
        component: PersonalCenterComponent
      },
      {
        path: 'order',
        component: OrderListComponent
      },
      {
        path: 'integral',
        component: IntegralListComponent
      }
    ]
  }
];

