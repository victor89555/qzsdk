import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralListComponent } from './integral-list.component';

describe('IntegralListComponent', () => {
  let component: IntegralListComponent;
  let fixture: ComponentFixture<IntegralListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegralListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegralListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
