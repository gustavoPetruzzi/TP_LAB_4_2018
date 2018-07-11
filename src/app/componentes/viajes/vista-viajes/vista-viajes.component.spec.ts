import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaViajesComponent } from './vista-viajes.component';

describe('VistaViajesComponent', () => {
  let component: VistaViajesComponent;
  let fixture: ComponentFixture<VistaViajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaViajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
