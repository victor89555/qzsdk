import { Component, OnInit } from '@angular/core';
import { Item } from "./water-list.model";

@Component({
  selector: 'app-water-list',
  templateUrl: './water-list.component.html',
  styleUrls: ['./water-list.component.css']
})
export class WaterListComponent implements OnInit {

  waterList : Item[] =[]

  constructor() { }

  ngOnInit() {
    this.waterList = [
      {time:'2017-01-12',value:2000},
      {time:'2017-02-12',value:3000},
      {time:'2017-03-12',value:2500},
      {time:'2017-04-12',value:2700},
      {time:'2017-05-12',value:2100},
      {time:'2017-06-12',value:3300},
      {time:'2017-07-12',value:2300},
      {time:'2017-08-12',value:3100},
      {time:'2017-09-12',value:1200},
      {time:'2017-10-12',value:2500},
      {time:'2017-11-12',value:2600},
      {time:'2017-12-12',value:1300}
    ]
  }

}
