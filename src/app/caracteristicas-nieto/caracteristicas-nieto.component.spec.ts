import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasNietoComponent } from './caracteristicas-nieto.component';

describe('CaracteristicasNietoComponent', () => {
  let component: CaracteristicasNietoComponent;
  let fixture: ComponentFixture<CaracteristicasNietoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasNietoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasNietoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
