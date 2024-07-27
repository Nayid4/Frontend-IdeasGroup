import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasLayoutComponent } from './estadisticas-layout.component';

describe('EstadisticasLayoutComponent', () => {
  let component: EstadisticasLayoutComponent;
  let fixture: ComponentFixture<EstadisticasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadisticasLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
