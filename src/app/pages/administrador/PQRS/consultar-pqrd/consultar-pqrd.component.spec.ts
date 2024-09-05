import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPQRDComponent } from './consultar-pqrd.component';

describe('ConsultarPQRSComponent', () => {
  let component: ConsultarPQRDComponent;
  let fixture: ComponentFixture<ConsultarPQRDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarPQRDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarPQRDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
