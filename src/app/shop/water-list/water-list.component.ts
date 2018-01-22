import { Component, OnInit } from '@angular/core';
import { Water } from "./water-list.model";
import {WaterListService} from "./water-list.service";
import {formatDate} from "../../thurder-ng/utils/date-util";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {StorageService} from "rebirth-storage";
import { Title } from '@angular/platform-browser';

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
  beginTime: string = null
  endTime: string = null

  constructor(private waterListService: WaterListService,
              private route: ActivatedRoute,
              private storageService: StorageService,
              private router: Router,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('流水列表')
    this.route.queryParams.forEach((params: Params) => {
      this.beginTime = params['beginTime']
      this.endTime = params['endTime']
    });
    this.shopId = parseInt(this.storageService.sessionStorage.getItem("shopId"))
    if(!this.shopId) {this.router.navigate(['shop/list'])}
    else{
      !this.beginTime && (this.beginTime = formatDate(new Date(this.nowTime - 604800000), "yyyy-MM-dd"))
      !this.endTime && (this.endTime = formatDate(new Date(this.nowTime), "yyyy-MM-dd"))
      this.loadWaterList()
    }
  }

  loadWaterList(){
    let bt = formatDate(new Date(this.beginTime), "yyyy-MM-dd")
    let et = formatDate(new Date(this.endTime), "yyyy-MM-dd")
    this.waterListService.loadWaterList(this.shopId, bt, et).subscribe(
      (list) => {
        this.waterList = list
      }
    )
  }

}
