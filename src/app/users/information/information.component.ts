import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VcodeService} from "../share/service/vcode.service";
import {RegExpDict} from "../../shared/reg.model";
import {InfomationService} from "./infomation.service";
import {PersonalCenterService} from "../personal-center/personal-center.service";
import {UserInfo} from "../personal-center/personal-center.model";
import {ToastService} from "ngx-weui";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  providers: [VcodeService, InfomationService, PersonalCenterService, ToastService]
})
export class InformationComponent implements OnInit {

  constructor(private vcodeService: VcodeService,
              private informationService: InfomationService,
              private personalCenterService: PersonalCenterService,
              private toastService: ToastService) { }

  infoForm: FormGroup
  userNameControl = new FormControl('', [Validators.required])
  mobileControl = new FormControl('', [Validators.required, Validators.pattern(new RegExp(RegExpDict["MOBILE"]))])
  vcodeControl = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
  sexControl = new FormControl('male', [Validators.required])
  addrControl = new FormControl('', [])

  //是否修改手机状态
  userInfo: UserInfo
  isChanging: boolean = false
  btnName: any = '获取验证码'
  isDisabled: boolean = false
  verifyCode: string = ''

  ngOnInit() {
    this.personalCenterService.getAll(55).subscribe(
      (user) => {
        this.userInfo = user
        this.userNameControl.setValue(user.name)
        this.mobileControl.setValue(user.mobile)
      }
    )
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
    console.log(this.infoForm)
    if(this.isChanging){
      this.checkVcode(this.doUpdate.bind(this))
    }else{
      this.doUpdate()
    }
  }

  checkVcode(cb) {
    let json = {
      mobile: this.mobileControl.value,
      verifyCode: this.vcodeControl.value
    }
    console.log(json);
    this.vcodeService.checkVerifyCode(json).subscribe(
      (res) => {
        if(res){
          cb()
        }
      }
    )
  }

  goBack() {
    window.history.back()
  }

  doUpdate() {
    if(this.userNameControl.valid && this.mobileControl.valid && this.sexControl.valid) {
      let json = {
        name: this.userNameControl.value,
        mobile: this.mobileControl.value,
        sex: this.sexControl.value,
        addr: this.addrControl.value
      }
      console.log(json)
      this.informationService.updateInformation(json).subscribe(
        (res) => {
          console.log(res)
          this.toastService.success("更新成功！").hide.subscribe(()=>{
            window.history.back()
          })
        }
      )
    }
  }

  // onSendCode() {
  //   return Observable.timer(1000).map((v, i) => true);
  // }
}
