import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-follow-wechat',
  templateUrl: './follow-wechat.component.html',
  styleUrls: ['./follow-wechat.component.css']
})
export class FollowWechatComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('关注公众号')
  }

}
