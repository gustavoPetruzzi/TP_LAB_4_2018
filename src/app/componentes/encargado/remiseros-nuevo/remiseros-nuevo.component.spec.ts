import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemiserosNuevoComponent } from './remiseros-nuevo.component';

describe('RemiserosNuevoComponent', () => {
  let component: RemiserosNuevoComponent;
  let fixture: ComponentFixture<RemiserosNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemiserosNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemiserosNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
