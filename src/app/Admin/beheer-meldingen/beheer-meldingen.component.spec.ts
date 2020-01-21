import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerMeldingenComponent } from './beheer-meldingen.component';

describe('BeheerMeldingenComponent', () => {
  let component: BeheerMeldingenComponent;
  let fixture: ComponentFixture<BeheerMeldingenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerMeldingenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerMeldingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
