import { Component, OnInit } from '@angular/core';
import {User} from "../users.model";
import {VcodeService} from "../share/service/vcode.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {Integral} from "../integral-list/integral-list.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [VcodeService]
})
export class RegisterComponent implements OnInit {

  constructor(private vcodeService: VcodeService) { }

  user: User
  verifyCode: string
  registerForm: FormGroup
  btnName: any = '获取验证码'
  isDisabled: boolean = false
  mobileRegExp = new RegExp(/^1[3|4|5|8][0-9]\d{4,8}$/)
  mobileControl = new FormControl('', [Validators.required, Validators.pattern(this.mobileRegExp)])
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
    this.doCountDown()
    if(this.mobileControl.valid) {
      this.vcodeService.getVerifyCode(this.mobileControl.value).subscribe(
        (res) => {
          this.verifyCode = res.verifyCode
        }
      )
    }
  }

  doRegister() {
    if(this.mobileControl.valid && this.vcodeControl.valid && this.agreeControl.value){
      this.checkVcode()
    }
  }

  checkVcode() {
    let json = {
      mobile: this.mobileControl.value,
      verifyCode: this.vcodeControl.value
    }
    console.log(json);
    this.vcodeService.checkVerifyCode(json).subscribe(
      (res) => {
        if(res){

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
