import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPQRSComponent } from './registrar-pqrs.component';

describe('RegistrarPQRSComponent', () => {
  let component: RegistrarPQRSComponent;
  let fixture: ComponentFixture<RegistrarPQRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarPQRSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
