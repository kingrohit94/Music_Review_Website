import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesongsComponent } from './deletesongs.component';

describe('DeletesongsComponent', () => {
  let component: DeletesongsComponent;
  let fixture: ComponentFixture<DeletesongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletesongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletesongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
