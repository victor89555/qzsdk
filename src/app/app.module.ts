import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { OrderListComponent } from './order-list/order-list.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    PersonalCenterComponent,
    OrderListComponent,
    TabListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
