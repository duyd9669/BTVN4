import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ProductComponent } from './baitap4-product.component';

describe('Baitap4ProductComponent', () => {
  let component: Baitap4ProductComponent;
  let fixture: ComponentFixture<Baitap4ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
