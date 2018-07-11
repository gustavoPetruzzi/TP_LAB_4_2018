import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCancelarComponent } from './cliente-cancelar.component';

describe('ClienteCancelarComponent', () => {
  let component: ClienteCancelarComponent;
  let fixture: ComponentFixture<ClienteCancelarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteCancelarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
