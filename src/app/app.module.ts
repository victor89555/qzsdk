import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { OrderListComponent } from './order-list/order-list.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routes';
import { IntegralListComponent } from './integral-list/integral-list.component';
import { OrderListService } from './order-list/order-list.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonalCenterComponent,
    OrderListComponent,
    TabListComponent,
    HomeComponent,
    IntegralListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    {provide: 'orderListService', useClass: OrderListService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
