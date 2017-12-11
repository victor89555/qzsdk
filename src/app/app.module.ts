import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { routes } from "./app.routes";
import { RouterModule } from '@angular/router';
import { ShopModule } from "./shop/shop.module";
import { CoreModule } from "./core/core.module";
import { ThurderNGModule } from "./thurder-ng/thurder-ng.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    UsersModule,
    ShopModule,
    ThurderNGModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
