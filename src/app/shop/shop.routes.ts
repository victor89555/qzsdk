import {Routes} from '@angular/router';
import {ShopComponent} from "./shop.component";
import {AnalysisComponent} from "./analysis/analysis.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {WaterListComponent} from "./water-list/water-list.component";
import {ShopListComponent} from "./shop-list/shop-list.component";
import {BindComponent} from "./bind/bind.component";

export const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bind'
      },
      {
        path: 'analysis',
        component: AnalysisComponent
      },
      {
        path: 'water',
        component: WaterListComponent
      },
      {
        path: 'orders',
        component: OrderListComponent
      },
      {
        path: 'list',
        component: ShopListComponent
      },
      {
        path: 'bind',
        component: BindComponent
      }
    ]
  }
];

