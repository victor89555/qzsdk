import { Component, OnInit } from '@angular/core';
import {User} from "../users.model";
import {VcodeService} from "../share/service/vcode.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {RegisterService} from "./register.service";
import {RegExp as Reg} from "../../shared/reg.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [VcodeService, RegisterService]
})
export class RegisterComponent implements OnInit {

  constructor(private vcodeService: VcodeService,
              private registerService: RegisterService) { }

  user: User
  verifyCode: string
  registerForm: FormGroup
  btnName: any = '获取验证码'
  isDisabled: boolean = false
  mobileControl = new FormControl('', [Validators.required, Validators.pattern(new RegExp(Reg["MOBILE"]))])
  vcodeControl = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
  agreeControl = new FormControl(false, [Validators.required])


  ngOnInit() {
    this.registerForm = new FormGroup({
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
    if(this.mobileControl.valid && this.vcodeControl.valid && this.agreeControl.value){
      this.checkVcode(()=>{
        let json = {
          wechatOpenId: "1",
          mobile: this.mobileControl.value
        }
        this.registerService.doRegister(json).subscribe(
          (user) => {
            console.log(user);
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
    console.log(json);
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
}
