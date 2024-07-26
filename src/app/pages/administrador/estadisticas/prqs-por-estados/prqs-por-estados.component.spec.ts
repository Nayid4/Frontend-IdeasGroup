import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrqsPorEstadosComponent } from './prqs-por-estados.component';

describe('PrqsPorEstadosComponent', () => {
  let component: PrqsPorEstadosComponent;
  let fixture: ComponentFixture<PrqsPorEstadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrqsPorEstadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrqsPorEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
