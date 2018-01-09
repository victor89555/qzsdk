import { Component, OnInit } from '@angular/core';
import {User} from "../users.model";
import {VcodeService} from "../share/service/vcode.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

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
  mobile: string = ''
  vcode: string = ''
  mobileRegExp = new RegExp(/^1[3|4|5|8][0-9]\d{4,8}$/)
  mobileControl = new FormControl(this.mobile, [Validators.required, Validators.pattern(this.mobileRegExp)])
  vcodeControl = new FormControl(this.vcode, [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
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
      this.vcodeService.getVerifyCode(this.mobileControl.value).subscribe(
        (code) => {
          this.verifyCode = code
          console.log('按键倒计时')
        }
      )
    }else {
      console.log(22)
    }
  }

  doRegister() {
    if(this.mobileControl.valid && this.vcodeControl.valid && this.agreeControl.value){
      console.log('注册')
    }
  }

}
