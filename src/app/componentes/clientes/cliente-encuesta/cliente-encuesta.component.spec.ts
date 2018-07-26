import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEncuestaComponent } from './cliente-encuesta.component';

describe('ClienteEncuestaComponent', () => {
  let component: ClienteEncuestaComponent;
  let fixture: ComponentFixture<ClienteEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
