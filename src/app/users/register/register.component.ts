import { Component, OnInit } from '@angular/core';
import {VcodeService} from "../../shared/vcode.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {RegisterService} from "./register.service";
import {RegExpDict} from "../../shared/reg.model";
import {UserInfo} from "../personal-center/personal-center.model";
import {AuthorizationService} from "rebirth-permission";
import {ToastService} from "ngx-weui";
import {Router} from "@angular/router";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [VcodeService, RegisterService]
})
export class RegisterComponent implements OnInit {

  constructor(private vcodeService: VcodeService,
              private registerService: RegisterService,
              private authorizationService: AuthorizationService,
              private toastService: ToastService,
              private router: Router,
              private titleService: Title) { }

  user: UserInfo
  verifyCode: string
  registerForm: FormGroup
  btnName: any = '获取验证码'
  isCounting: boolean = false
  nameControl = new FormControl('', [Validators.required])
  mobileControl = new FormControl('', [Validators.required, Validators.pattern(new RegExp(RegExpDict["MOBILE"]))])
  vcodeControl = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
  agreeControl = new FormControl(false, [Validators.required])

  ngOnInit() {
    this.titleService.setTitle('会员注册')
    this.registerService.getInfo().subscribe(
      (user)=>{
        console.log(user)
        this.user = user
        this.nameControl.setValue(user.nickName)
      }
    )
    this.registerForm = new FormGroup({
      username: this.nameControl,
      mobile: this.mobileControl,
      vcode: this.vcodeControl,
      agree: this.agreeControl
    })
    console.log(this.registerForm)
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

  doRegister() {
    if(this.nameControl.valid && this.mobileControl.valid &&
      this.vcodeControl.valid && this.agreeControl.value){
      this.checkVcode(()=>{
        let json = {
          name: this.nameControl.value,
          mobile: this.mobileControl.value
        }
        this.registerService.doRegister(json).subscribe(
          (user) => {
            console.log(user);
            this.authorizationService.setCurrentUser(user);
            this.toastService.success("注册成功！").hide.subscribe(()=>{
              this.router.navigate(['users/orders'],{skipLocationChange: true})
            })

          }
        )
      })
    }
  }

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

  //倒计时
  doCountDown() {
    this.isCounting = true
    let t = 60
    this.btnName = t + 's'
    let timer = setInterval(() => {
      if(t-- <= 0) {
        clearInterval(timer)
        this.isCounting = false
        this.btnName = '获取验证码'
      }else {
        this.btnName = t + 's'
      }
    },1000)
  }
}
