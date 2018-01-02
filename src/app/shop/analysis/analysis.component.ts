import {Component, OnInit} from '@angular/core';
import {
  Market_Time_Day,
  Market_Time_Hour,
  Market_Product,Market_Shop
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
  shopOption:any = {}
  constructor() { }

  ngOnInit() {
    this.getBusinessStatistics()
    this.getGreensSellStatistic()
    this.getShopSellStatistic()
  }
  // 获取营业额统计
  getBusinessStatistics(){
    this.businessOption = {
      title: {
        left: '10px',
        text: '市场营业额'
      },
      tooltip: {
        trigger: 'axis'
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
  //获取菜品销量统计
  getGreensSellStatistic(){
    this.greensOption = {
      title : {
        text: '菜品销量分布图',
        left: '10px'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
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
  //获取商户销量排名
  getShopSellStatistic(){
    this.shopOption = {
      color: ['#21dbd8'],
      title : {
        text: '商户销量排名',
        left: '0px'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      toolbox: {
        show: true,
        top: '50px',
        left: '0px',
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
        top:'150px',
        left: '10px',
        right: '20px',
        bottom: '10px',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['金商户','李商户','王商户','陈商户','黄商户','蓝陈商户','赵成商户','徐商户','许商户','钟商户']
        }
      ],
      yAxis : [
        {
          type : 'value',
          name : '(万元/年)'
        }
      ],
      series : [
        {
          name:'销售金额',
          type:'bar',
          barWidth: '50%',
          data:[320, 310, 295, 267, 234, 221, 220, 215,198,193]
        }
      ]
    };
  }
}
