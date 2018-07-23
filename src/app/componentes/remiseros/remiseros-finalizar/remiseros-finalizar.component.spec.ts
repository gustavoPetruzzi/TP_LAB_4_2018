import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemiserosFinalizarComponent } from './remiseros-finalizar.component';

describe('RemiserosFinalizarComponent', () => {
  let component: RemiserosFinalizarComponent;
  let fixture: ComponentFixture<RemiserosFinalizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemiserosFinalizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemiserosFinalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
