import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsongsComponent } from './addsongs.component';

describe('AddsongsComponent', () => {
  let component: AddsongsComponent;
  let fixture: ComponentFixture<AddsongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
