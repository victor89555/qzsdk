import { Component, OnInit } from '@angular/core';
import {Integral} from "./integral-list.model";
import {IntegralListService} from "./integral-list.service";
import {Page} from "../../thurder-ng/models/page.model";
import {dicts} from "../../thurder-ng/models/dictionary";

@Component({
  selector: 'app-integral-list',
  templateUrl: './integral-list.component.html',
  styleUrls: ['./integral-list.component.css'],
  providers: [IntegralListService]
})
export class IntegralListComponent implements OnInit {

  integralList: Integral[] = []
  integralsDict = dicts["INTEGRALS_SUBJECT"]

  constructor(
    private integralListService : IntegralListService
  ) {}

  ngOnInit() {
    this.getIntegralList()
  }

  getIntegralList() {
    this.integralListService.getAll().subscribe(
      (integrals) => {
        console.log(integrals)
        this.integralList = integrals
      }
    )
  }

}
