import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeadminComponent } from './makeadmin.component';

describe('MakeadminComponent', () => {
  let component: MakeadminComponent;
  let fixture: ComponentFixture<MakeadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
