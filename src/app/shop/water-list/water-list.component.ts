import { Component, OnInit } from '@angular/core';
import { water } from "./water-list.model";

@Component({
  selector: 'app-water-list',
  templateUrl: './water-list.component.html',
  styleUrls: ['./water-list.component.css']
})
export class WaterListComponent implements OnInit {

  waterList : any[]

  constructor() { }

  ngOnInit() {
    this.waterList = [
      {belong_date:'2017-01-12',amount:2000},
      {belong_date:'2017-01-12',amount:2000},
      {belong_date:'2017-01-12',amount:2000},
      {belong_date:'2017-01-12',amount:2000},
      {belong_date:'2017-01-12',amount:2000}
    ]
  }

}
