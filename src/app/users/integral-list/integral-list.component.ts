import { Component, OnInit } from '@angular/core';
import {Integral} from "./integral-list.model";
import {IntegralListService} from "./integral-list.service";
import {Page} from "../../thurder-ng/models/page.model";

@Component({
  selector: 'app-integral-list',
  templateUrl: './integral-list.component.html',
  styleUrls: ['./integral-list.component.css'],
  providers: [IntegralListService]
})
export class IntegralListComponent implements OnInit {

  integralList: Integral[] = []

  constructor(
    private integralListService : IntegralListService
  ) {}

  ngOnInit() {
    this.getIntegralList()
  }

  getIntegralList() {
    this.integralListService.getAll().subscribe(
      (integrals) => {
        // console.log(integrals)
        this.integralList = integrals
      }
    )
  }

}
