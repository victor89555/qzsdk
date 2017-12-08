import { Routes, RouterModule } from '@angular/router';
import {ShopComponent} from "./shop.component";
import {AnalysisComponent} from "./analysis/analysis.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {WaterListComponent} from "./water-list/water-list.component";

export const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'analysis'
      },
      {
        path: 'analysis',
        component: AnalysisComponent
      },
      {
        path: 'order',
        component: OrderListComponent
      },
      {
        path: 'water',
        component: WaterListComponent
      }
    ]
  }
];

