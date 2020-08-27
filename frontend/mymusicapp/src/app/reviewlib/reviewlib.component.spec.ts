import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewlibComponent } from './reviewlib.component';

describe('ReviewlibComponent', () => {
  let component: ReviewlibComponent;
  let fixture: ComponentFixture<ReviewlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
