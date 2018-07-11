import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarVehiculosComponent } from './modificar-vehiculos.component';

describe('ModificarVehiculosComponent', () => {
  let component: ModificarVehiculosComponent;
  let fixture: ComponentFixture<ModificarVehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarVehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
