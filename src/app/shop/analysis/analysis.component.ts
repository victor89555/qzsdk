import {Component, Input, OnInit} from '@angular/core';
import { AnalysisService} from "./analysis.service";
import {Shop_Report} from "./analysis.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {StorageService} from "rebirth-storage";
import {formatDate} from "../../thurder-ng/utils/date-util";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
  providers:[AnalysisService]
})
export class AnalysisComponent implements OnInit {

  shopId: number
  nowTime: number = new Date().getTime()
  beginTime: string = null
  endTime: string = null
  productOption: any = {
    title: {
      left: '10px',
      text: '商户交易统计产品维度'
    },
    legend: {
      top:'100px',
      left:'10px',
      data: []
    },
    toolbox: {
      show: true,
      top: '50px',
      left: '10px',
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: {readOnly: false},
        magicType: {type: ['line', 'bar']},
        restore: {},
        saveAsImage: {}
      }
    },
    grid: {
      top:'200px',
      left: '10px',
      right: '20px',
      bottom: '10px',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: []
    },
    yAxis: {
      type: 'value',
      splitLine: {show: false},
      name:'纵坐标'
    },
    series: [
      {
        name:'干货营业额',
        type:'line',
        showSymbol: false,
        data:[]
      }
    ]
  }
  timeOption:any = {
    title : {
      text: '商户交易统计时间维度',
      left: '10px'
    },
    legend: {
      x : 'center',
      y : 'bottom',
      data: []
    },
    toolbox: {
      show : true,
      top: '50px',
      left:'10px',
      feature : {
        mark : {show: true},
        dataView : {show: true, readOnly: false},
        magicType : {
          show: true,
          type: ['pie', 'funnel']
        },
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    calculable : true,
    series : [
      { name:'销售数量',
        type:'pie',
        radius : [10, 50],
        roseType : 'area',
        data:[]
      }
    ]
  }

  constructor(private analysisService: AnalysisService,
              private route: ActivatedRoute,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.beginTime = params['beginTime']
      this.endTime = params['endTime']
    });
    this.shopId = parseInt(this.storageService.sessionStorage.getItem("shopId"))
    if(!this.shopId) {this.router.navigate(['shop/list'])}
    else{
      !this.beginTime && (this.beginTime = formatDate(new Date(this.nowTime - 604800000), "yyyy-MM-dd"))
      !this.endTime && (this.endTime = formatDate(new Date(this.nowTime), "yyyy-MM-dd"))
      //获取所有统计数据
      this.getService()
    }
  }

  getService() {
    let bt = formatDate(new Date(this.beginTime), "yyyy-MM-dd")
    let et = formatDate(new Date(this.endTime), "yyyy-MM-dd")

    // 产品维度
    this.analysisService.getMarketProduct(this.shopId, bt, et).subscribe(
      (res: Shop_Report[]) => {
        console.log(res)
      }
    )

    // 时间维度
    this.analysisService.getMarketTimeDay(this.shopId, bt, et).subscribe(
      (res: Shop_Report[]) => {
        console.log(res)
      }
    )
  }

}
