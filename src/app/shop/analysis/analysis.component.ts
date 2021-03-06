import {Component, Input, OnInit} from '@angular/core';
import { AnalysisService} from "./analysis.service";
import {Shop_Report} from "./analysis.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {StorageService} from "rebirth-storage";
import {formatDate} from "../../thurder-ng/utils/date-util";
import {NgxEchartsService} from "ngx-echarts";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
  providers: [AnalysisService, NgxEchartsService]
})
export class AnalysisComponent implements OnInit {

  echarts = this.ngxEchartsService.echarts
  shopId: number
  nowTime: number = new Date().getTime()
  beginTime: string = null
  endTime: string = null
  timeMerge: any
  timeOption: any = {
    title : {
      text: '销量走势',
      left: '10px'
    },
    grid: {
      left: '15%'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: []
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    series: [
      {
        name:'商户交易统计时间维度',
        type:'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
          normal: {
            color: 'rgb(255, 70, 131)'
          }
        },
        areaStyle: {
          normal: {
            color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgb(255, 158, 68)'
            }, {
              offset: 1,
              color: 'rgb(255, 70, 131)'
            }])
          }
        },
        data: []
      }
    ]
  }
  productMerge: any
  productOption: any = {
    title: {
      left: '10px',
      text: '菜品分布'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: []
    },
    series: [
      {
        name:'name',
        type:'pie',
        label: {
          normal: {
            formatter: '{b}:\n{d}%'
          },
        },
        roseType : 'area',
        radius: [0, '50%'],
        data:[]
      }
    ]
  }

  constructor(private analysisService: AnalysisService,
              private route: ActivatedRoute,
              private storageService: StorageService,
              private router: Router,
              private ngxEchartsService: NgxEchartsService,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('经营情况')
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
        let legend = []
        let series = []
        res.map((item)=>{
          legend.push(item.productName)
          series.push({value:item.totalQty, name:item.productName})
        })
        this.productOption.legend.data = legend
        this.productOption.series[0].data = series
        this.productMerge = {
          legend: this.productOption.legend,
          series: this.productOption.series
        }
      }
    )

    // 时间维度
    this.analysisService.getMarketTimeDay(this.shopId, bt, et).subscribe(
      (res: Shop_Report[]) => {
        let xAxis = []
        let series = []
        res.map((item)=>{
          xAxis.push(item.reportDate)
          series.push(item.totalMoneyAmount)
        })
        this.timeOption.xAxis.data = xAxis
        this.timeOption.series[0].data = series

        this.timeMerge = {
          xAxis: this.timeOption.xAxis,
          series: this.timeOption.series
        }
      }
    )
  }

}
