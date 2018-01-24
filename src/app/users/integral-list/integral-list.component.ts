import { Component, OnInit } from '@angular/core';
import {Integral} from "./integral-list.model";
import {IntegralListService} from "./integral-list.service";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-integral-list',
  templateUrl: './integral-list.component.html',
  styleUrls: ['./integral-list.component.css'],
  providers: [IntegralListService]
})
export class IntegralListComponent implements OnInit {

  integralList: Integral[] = []
  isLoading: boolean = false
  isEmpty:boolean = false

  constructor(
    private integralListService : IntegralListService,
    private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('积分列表')
    this.getIntegralList()
  }

  getIntegralList() {
    this.isLoading = true
    this.integralListService.getAll().subscribe(
      (integrals) => {
        console.log(integrals)
        this.isLoading = false
        this.integralList = integrals
        if(integrals.length == 0){
          this.isEmpty = true
        }else {
          this.isEmpty = false
        }
      }
    )
  }

}
