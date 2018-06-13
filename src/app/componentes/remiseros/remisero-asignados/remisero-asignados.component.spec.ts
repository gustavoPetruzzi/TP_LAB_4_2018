import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemiseroAsignadosComponent } from './remisero-asignados.component';

describe('RemiseroAsignadosComponent', () => {
  let component: RemiseroAsignadosComponent;
  let fixture: ComponentFixture<RemiseroAsignadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemiseroAsignadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemiseroAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
