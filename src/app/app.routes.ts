import { Routes, RouterModule } from '@angular/router';
import { PersonalCenterComponent } from "./personal-center/personal-center.component";
import { OrderListComponent } from "./order-list/order-list.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal',
    pathMatch: 'full'
  },
  {
    path: 'personal',
    component: PersonalCenterComponent
  },
  {
    path: 'order',
    component: OrderListComponent
  }
];

export const routing = RouterModule.forRoot(routes);
