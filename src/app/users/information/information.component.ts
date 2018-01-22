import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VcodeService} from "../../shared/vcode.service";
import {RegExpDict} from "../../shared/reg.model";
import {InfomationService} from "./infomation.service";
import {PersonalCenterService} from "../personal-center/personal-center.service";
import {UserInfo} from "../personal-center/personal-center.model";
import {ToastService} from "ngx-weui";
import { Title } from '@angular/platform-browser';

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
              private toastService: ToastService,
              private titleService: Title) { }

  infoForm: FormGroup
  userNameControl = new FormControl('', [Validators.required])
  mobileControl = new FormControl('', [Validators.required, Validators.pattern(new RegExp(RegExpDict["MOBILE"]))])
  vcodeControl = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
  sexControl = new FormControl(0, [Validators.required])
  addrControl = new FormControl('', [])

  //是否修改手机状态
  userInfo: UserInfo
  isChanging: boolean = false
  isCounting: boolean = false
  btnName: any = '获取验证码'

  ngOnInit() {
    this.titleService.setTitle('用户信息')
    this.personalCenterService.getPersonalInfo().subscribe(
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

  //获取验证码
  getVCode() {
    console.log(this.mobileControl)
    if(this.mobileControl.valid) {
      this.doCountDown()
      this.vcodeService.getVerifyCode(this.mobileControl.value).subscribe(
        (res) => {
          console.log(res)
        }
      )
    }
  }

  //倒计时
  doCountDown() {
    this.isCounting = true
    let t = 60
    this.btnName = t + 's'
    let timer = setInterval(() => {
      if(t-- <= 0){
        clearInterval(timer)
        this.isCounting = false
        this.btnName = '获取验证码'
      }else {
        this.btnName = t + 's'
      }
    },1000)
  }

  // 点击修改
  doSubmit() {
    // console.log(this.infoForm)
    if(this.isChanging){
      this.checkVcode(this.doUpdate.bind(this))
    }else{
      this.doUpdate()
    }
  }

  // 验证验证码
  checkVcode(cb) {
    let json = {
      mobile: this.mobileControl.value,
      verifyCode: this.vcodeControl.value
    }
    console.log(json)
    this.vcodeService.checkVerifyCode(json).subscribe(
      (res) => {
        if(res){
          cb()
        }
      }
    )
  }

  // 返回上一页
  goBack() {
    window.history.back()
  }

  // 更新用户信息
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
          this.toastService.success("更新成功！").hide.subscribe(()=>{
            window.history.back()
          })
        }
      )
    }
  }

}
