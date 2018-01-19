import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopListBtnComponent } from './shop-list-btn.component';

describe('ShopListBtnComponent', () => {
  let component: ShopListBtnComponent;
  let fixture: ComponentFixture<ShopListBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopListBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopListBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
