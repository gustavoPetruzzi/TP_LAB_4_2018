import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemiseroRechazarComponent } from './remisero-rechazar.component';

describe('RemiseroRechazarComponent', () => {
  let component: RemiseroRechazarComponent;
  let fixture: ComponentFixture<RemiseroRechazarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemiseroRechazarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemiseroRechazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
