import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeldingenComponent } from './meldingen.component';

describe('MeldingenComponent', () => {
  let component: MeldingenComponent;
  let fixture: ComponentFixture<MeldingenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeldingenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeldingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
