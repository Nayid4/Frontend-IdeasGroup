import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPQRSComponent } from './consultar-pqrs.component';

describe('ConsultarPQRSComponent', () => {
  let component: ConsultarPQRSComponent;
  let fixture: ComponentFixture<ConsultarPQRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarPQRSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
