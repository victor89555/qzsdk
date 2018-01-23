import { Component, OnInit } from '@angular/core';
import {Market, Shop} from "./shop-list.model";
import {ShopListService} from "./shop-list.service";
import {Router} from "@angular/router";
import {AuthorizationService} from "rebirth-permission";
import {StorageService} from "rebirth-storage";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
  providers: [ShopListService]
})
export class ShopListComponent implements OnInit {

  constructor(private shopListService: ShopListService,
              private router: Router,
              private authorizationService: AuthorizationService,
              private storageService: StorageService,
              private titleService: Title) { }

  markets: Market[] = []
  shops: Shop[]

  ngOnInit() {
    this.titleService.setTitle('店铺列表')
    this.getShopList()
  }

  getShopList() {
    this.shopListService.getShops().subscribe(
      (shops) => {
        console.log(shops)
        this.shops = shops
        this.storageService.sessionStorage.setItem("shopNum", shops.length.toString())
        shops.length > 0 && this.formatMarkets(this.shops)
      }
    )
  }

  // 商户列表归类为市场列表
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
    this.markets = arr
  }

  enter(shopId) {
    this.storageService.sessionStorage.setItem("shopId", shopId.toString())
    this.router.navigateByUrl("/shop/water")
  }

}
