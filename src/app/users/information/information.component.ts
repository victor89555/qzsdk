import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VcodeService} from "../share/service/vcode.service";
import {RegExp as Reg} from "../../shared/reg.model";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  providers: [VcodeService]
})
export class InformationComponent implements OnInit {

  constructor(private vcodeService: VcodeService) { }

  infoForm: FormGroup
  userNameControl = new FormControl('最帅是小明', [Validators.required])
  mobileControl = new FormControl('15159283527', [Validators.required, Validators.pattern(new RegExp(Reg["MOBILE"]))])
  vcodeControl = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
  sexControl = new FormControl('male', [Validators.required])
  addrControl = new FormControl('', [])

  //是否修改手机状态
  isChanging: boolean = false
  btnName: any = '获取验证码'
  isDisabled: boolean = false
  verifyCode: string = ''

  ngOnInit() {
    this.infoForm = new FormGroup({
      username: this.userNameControl,
      mobile: this.mobileControl,
      vcode: this.vcodeControl,
      sex: this.sexControl,
      addr: this.addrControl
    })
  }

  getVCode() {
    console.log(this.mobileControl)
    if(this.mobileControl.valid) {
      this.doCountDown()
      this.vcodeService.getVerifyCode(this.mobileControl.value).subscribe(
        (res) => {
          this.verifyCode = res.verifyCode
        }
      )
    }
  }

  //倒计时
  doCountDown() {
    this.isDisabled = true
    let t = 60
    this.btnName = t + 's'
    let timer = setInterval(() => {
      if(t-- <= 0){
        clearInterval(timer)
        this.isDisabled = false
        this.btnName = '获取验证码'
      }else {
        this.btnName = t + 's'
      }
    },1000)
  }

  //提交
  doSubmit() {

  }
}
