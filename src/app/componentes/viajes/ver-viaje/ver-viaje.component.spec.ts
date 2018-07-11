import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerViajeComponent } from './ver-viaje.component';

describe('VerViajeComponent', () => {
  let component: VerViajeComponent;
  let fixture: ComponentFixture<VerViajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerViajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
