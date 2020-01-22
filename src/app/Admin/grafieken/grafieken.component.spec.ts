import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafiekenComponent } from './grafieken.component';

describe('GrafiekenComponent', () => {
  let component: GrafiekenComponent;
  let fixture: ComponentFixture<GrafiekenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafiekenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafiekenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
