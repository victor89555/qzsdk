import { Component, OnInit } from '@angular/core';
import {Market, Shop} from "./shop-list.model";
import {ShopListService} from "./shop-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
  providers: [ShopListService]
})
export class ShopListComponent implements OnInit {

  constructor(private shopListService: ShopListService,
              private router: Router) { }

  operatorId: number = 2
  markets: Market[] = []
  shops: Shop[]
  ngOnInit() {
    this.getShopList(this.operatorId)
  }

  getShopList(oid) {
    this.shopListService.getShops(oid).subscribe(
      (shops) => {
        // console.log(shops)
        this.shops = shops
        this.formatMarkets(this.shops)
      }
    )
  }

  //商户列表归类为市场列表
  formatMarkets(shops){
    let arr = []
    let o = {
      name: shops[0].marketName,
      shops: [shops[0]]
    }
    arr.push(o)
    for(let i = 1; i < shops.length; i++) {
      for(let j = 0; j < arr.length; j++) {
        if(arr[j].name == shops[i].marketName){
          arr[j].shops.push(shops[i])
          break
        }else {
          if(j == arr.length - 1) {
            let o = {
              name: shops[i].marketName,
              shops: [shops[i]]
            }
            arr.push(o)
            break
          }
        }
      }
    }
    // console.log(arr)
    this.markets = arr
  }


  enter(shopId) {
    console.log("进入Id为" + shopId + "的商户")
    this.router.navigateByUrl('shop/analysis')
  }
}
