import { Component, OnInit } from '@angular/core';
import { Water } from "./water-list.model";
import {WaterListService} from "./water-list.service";
import {formatDate} from "../../thurder-ng/utils/date-util";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {StorageService} from "rebirth-storage";
import {NeedShopIdService} from "../../shared/needShopId.service";

@Component({
  selector: 'app-water-list',
  templateUrl: './water-list.component.html',
  styleUrls: ['./water-list.component.css'],
  providers: [WaterListService]
})
export class WaterListComponent implements OnInit {

  shopId: number
  waterList : any[]
  nowTime: number = new Date().getTime()
  beginTime: string
  endTime: string

  constructor(private waterListService: WaterListService,
              private route: ActivatedRoute,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit() {
    this.shopId = parseInt(this.storageService.sessionStorage.getItem("shopId"))
    if(!this.shopId) {this.router.navigate(['shop/list'])}
    else{
      this.beginTime = formatDate(new Date(this.nowTime - 604800000), "yyyy-MM-dd hh:mm:ss.S").slice(0,10)
      this.endTime = formatDate(new Date(this.nowTime), "yyyy-MM-dd hh:mm:ss.S").slice(0,10)
      console.log(this.shopId,this.beginTime, this.endTime)
      this.loadWaterList()
    }
  }

  loadWaterList(){
    this.waterListService.loadWaterList(this.shopId, this.beginTime, this.endTime).subscribe(
      (list) => {
        this.waterList = list
      }
    )
  }



}
