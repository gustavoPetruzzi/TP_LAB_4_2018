import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInfoNuevoComponent } from './cliente-info-nuevo.component';

describe('ClienteInfoNuevoComponent', () => {
  let component: ClienteInfoNuevoComponent;
  let fixture: ComponentFixture<ClienteInfoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteInfoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteInfoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
