import {Component, OnInit} from '@angular/core';
import {
  Market_Time_Day,
  Market_Time_Hour,
  Market_Product,
  Market_Shop
} from "./analysis.model";
import { AnalysisService } from "./analysis.service";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  businessOption: any = {}
  greensOption:any = {}
  // ShopBusinessTurnoverStatistics = []
  // SalesStatisticsOfVegetableProducts = []
  constructor() { }

  ngOnInit() {
    //获取商户营业额统计
    this.getShopBusinessTurnoverStatistics()
    //获取商户菜品销量统计
    this.getSalesStatisticsOfVegetableProducts()
  }

  //获取商户营业额统计
  getShopBusinessTurnoverStatistics() {
    this.businessOption = {
      title: {
        left: '10px',
        text: '商户营业额统计'
      },
      legend: {
        top:'100px',
        left:'10px',
        data:['营业总额','肉类营业额','蔬菜营业额','干货营业额']
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
        data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis: {
        type: 'value',
        splitLine: {show: false},
        name:'(万元/日)'
      },
      series: [
        {
          name:'干货营业额',
          type:'line',
          showSymbol: false,
          data:[22, 18, 19, 23, 29, 33, 31]
        },
        {
          name:'蔬菜营业额',
          type:'line',
          showSymbol: false,
          data:[15, 23, 20, 15, 19, 33, 41]
        },
        {
          name:'肉类营业额',
          type:'line',
          showSymbol: false,
          data:[32, 33, 30, 33, 39, 33, 32]
        },
        {
          name:'营业总额',
          type:'line',
          markPoint: {
            data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          },
          showSymbol: false,
          data:[69, 74, 69, 71, 87, 99, 104]
        }
      ]
    };
  }

  //获取商户菜品销量统计
  getSalesStatisticsOfVegetableProducts() {
    this.greensOption = {
      title : {
        text: '商户菜品销量统计',
        left: '10px'
      },
      legend: {
        x : 'center',
        y : 'bottom',
        data:['蔬菜','主食','奶制品','肉类','冷冻类','火锅食品','干货','水果']
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
          data:[
            {value:40, name:'蔬菜'},
            {value:30, name:'主食'},
            {value:15, name:'奶制品'},
            {value:25, name:'肉类'},
            {value:20, name:'冷冻类'},
            {value:15, name:'火锅食品'},
            {value:5, name:'干货'},
            {value:25, name:'水果'}
          ]
        }
      ]
    };
  }
}
