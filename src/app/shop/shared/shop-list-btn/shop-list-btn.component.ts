import { Component, OnInit } from '@angular/core';
import {StorageService} from "rebirth-storage";

@Component({
  selector: 'shop-list-btn',
  templateUrl: './shop-list-btn.component.html',
  styleUrls: ['./shop-list-btn.component.css']
})
export class ShopListBtnComponent implements OnInit {

  shopNum: number
  constructor(private storageService: StorageService) { }

  ngOnInit() {
    console.log(this.shopNum)
    this.shopNum = parseInt(this.storageService.sessionStorage.getItem("shopNum"))
    console.log(this.shopNum)
  }
}
