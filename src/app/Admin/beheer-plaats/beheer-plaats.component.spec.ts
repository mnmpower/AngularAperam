import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerPlaatsComponent } from './beheer-plaats.component';

describe('BeheerPlaatsComponent', () => {
  let component: BeheerPlaatsComponent;
  let fixture: ComponentFixture<BeheerPlaatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerPlaatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerPlaatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
