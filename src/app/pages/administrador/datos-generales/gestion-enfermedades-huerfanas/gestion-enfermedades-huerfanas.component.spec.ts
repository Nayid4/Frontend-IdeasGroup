import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEnfermedadesHuerfanasComponent } from './gestion-enfermedades-huerfanas.component';

describe('GestionEnfermedadesHuerfanasComponent', () => {
  let component: GestionEnfermedadesHuerfanasComponent;
  let fixture: ComponentFixture<GestionEnfermedadesHuerfanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEnfermedadesHuerfanasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionEnfermedadesHuerfanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
