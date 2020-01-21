import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerPersoonComponent } from './beheer-persoon.component';

describe('BeheerPersoonComponent', () => {
  let component: BeheerPersoonComponent;
  let fixture: ComponentFixture<BeheerPersoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerPersoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerPersoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
