import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  constructor() { }

  isDisabled: boolean = false
  btnName:string = '获取验证码'

  ngOnInit() {
  }

  getVCode() {
  }

  doBind() {
  }
}
