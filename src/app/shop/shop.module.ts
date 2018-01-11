import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { routes } from "./shop.routes"
import { ShopComponent} from "./shop.component";
import { OrderListComponent } from './order-list/order-list.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { WaterListComponent } from './water-list/water-list.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { NgxEchartsModule } from "ngx-echarts";
import { ShopListComponent } from './shop-list/shop-list.component';
import { LoginComponent } from './login/login.component';
import { BindComponent } from './bind/bind.component';

@NgModule ({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ShopComponent,
    OrderListComponent,
    AnalysisComponent,
    WaterListComponent,
    TabListComponent,
    ShopListComponent,
    LoginComponent,
    BindComponent,
  ]
})

export class ShopModule {}
