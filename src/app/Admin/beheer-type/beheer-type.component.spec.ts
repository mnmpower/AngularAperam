import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerTypeComponent } from './beheer-type.component';

describe('BeheerTypeComponent', () => {
  let component: BeheerTypeComponent;
  let fixture: ComponentFixture<BeheerTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
