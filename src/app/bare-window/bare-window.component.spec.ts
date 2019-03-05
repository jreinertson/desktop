import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BareWindowComponent } from './bare-window.component';

describe('BareWindowComponent', () => {
  let component: BareWindowComponent;
  let fixture: ComponentFixture<BareWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BareWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BareWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
