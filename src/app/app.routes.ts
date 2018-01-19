import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: 'app/users/users.module#UsersModule'
  },
  {
    path: 'shop',
    loadChildren: 'app/shop/shop.module#ShopModule'
  },
  {
    path: 'test',
    loadChildren: 'app/test/test.module#TestModule'
  }
];

