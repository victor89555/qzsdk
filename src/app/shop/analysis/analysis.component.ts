import {Component, OnInit} from '@angular/core';
import { AnalysisService} from "./analysis.service";
import {
  Market_Time_Day,
  Market_Time_Hour,
  Market_Product,
  Market_Shop
} from "./analysis.model";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
  providers:[AnalysisService]
})
export class AnalysisComponent implements OnInit {

  startTime: string = '2017-12-01'
  endTime: string = '2017-12-31'
  businessOption: any = {
    title: {
      left: '10px',
      text: '商户营业额统计'
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
  greensOption:any = {
    title : {
      text: '商户菜品销量统计',
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
  // ShopBusinessTurnoverStatistics = []
  // SalesStatisticsOfVegetableProducts = []
  constructor(private analysisService: AnalysisService) { }

  ngOnInit() {
    //获取所有统计数据
    this.getService()
  }

  getService() {
    let st = this.startTime
    let et = this.endTime
    this.analysisService.getMarketShop(st, et).subscribe(
      (res) => {
        res.map(
          (obj) => {
            this.businessOption.legend.data.push(obj.shopName)
            this.businessOption.series[0].data.push(obj)
          }
        )
      }
    )
    this.analysisService.getMarketProduct(st, et).subscribe(
      (res) => {
        console.log(res)
      }
    )
    this.analysisService.getMarketTimeDay(st, et).subscribe(
      (res) => {
        console.log(res)
      }
    )
  }

}
