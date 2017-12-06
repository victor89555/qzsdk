import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { OrderListComponent } from './order-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    OrderListComponent
  ]
})

export class OrderListModule {}
