import { Component, OnInit } from '@angular/core';
import {VcodeService} from "../../shared/vcode.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {RegExpDict} from "../../shared/reg.model";
import {BindService} from "./bind.service";
import {ToastService} from "ngx-weui";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css'],
  providers: [VcodeService, BindService,ToastService]
})

export class BindComponent implements OnInit {

  constructor(private vcodeService: VcodeService,
              private bindService: BindService,
              private toastService: ToastService,
              private router: Router) { }

  isCounting: boolean = false
  btnName:string = '获取验证码'
  verifyCode: string

  // 表单
  bindForm: FormGroup
  mobileControl = new FormControl('', [Validators.required, Validators.pattern(RegExpDict["MOBILE"])])
  vcodeControl = new FormControl('', [Validators.required])


  ngOnInit() {
    // 表单规则
    this.bindForm = new FormGroup({
      mobile: this.mobileControl,
      vcode: this.vcodeControl
    })
  }

  // 获取验证码
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

  // 绑定按钮
  doSubmit() {
    if(this.mobileControl.valid && this.vcodeControl.valid) {
      this.checkVcode(this.doBind.bind(this))
      // this.doBind()
    }
  }

  doBind() {
    let json = {
      mobile: this.mobileControl.value
    }
    this.bindService.bindOperator(json).subscribe(
      (user) => {
        console.log(user)
        // 绑定接口
        this.toastService.success("绑定成功！").hide.subscribe(()=>{
          this.router.navigate(['shop/list'],{skipLocationChange: true})
        })
      }
    )
  }

  // 验证码校验
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
}
