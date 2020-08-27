import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreviewsComponent } from './addreviews.component';

describe('AddreviewsComponent', () => {
  let component: AddreviewsComponent;
  let fixture: ComponentFixture<AddreviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
