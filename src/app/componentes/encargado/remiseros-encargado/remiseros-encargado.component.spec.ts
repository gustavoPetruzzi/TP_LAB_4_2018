import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemiserosEncargadoComponent } from './remiseros-encargado.component';

describe('RemiserosEncargadoComponent', () => {
  let component: RemiserosEncargadoComponent;
  let fixture: ComponentFixture<RemiserosEncargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemiserosEncargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemiserosEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
