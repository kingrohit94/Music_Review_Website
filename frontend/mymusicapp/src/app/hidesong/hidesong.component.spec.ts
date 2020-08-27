import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HidesongComponent } from './hidesong.component';

describe('HidesongComponent', () => {
  let component: HidesongComponent;
  let fixture: ComponentFixture<HidesongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HidesongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HidesongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
