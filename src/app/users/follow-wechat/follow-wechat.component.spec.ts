import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowWechatComponent } from './follow-wechat.component';

describe('FollowWechatComponent', () => {
  let component: FollowWechatComponent;
  let fixture: ComponentFixture<FollowWechatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowWechatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowWechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
