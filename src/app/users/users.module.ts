import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { OrderListComponent } from './order-list/order-list.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { IntegralListComponent } from './integral-list/integral-list.component';
import { UsersComponent } from './users.component';
import { routes } from './users.routes';
import { RouterModule } from "@angular/router";
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { RegisterComponent } from './register/register.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UsersComponent,
    PersonalCenterComponent,
    OrderListComponent,
    TabListComponent,
    IntegralListComponent,
    OrderDetailComponent,
    RegisterComponent,
    InformationComponent
  ]
})
export class UsersModule {}
