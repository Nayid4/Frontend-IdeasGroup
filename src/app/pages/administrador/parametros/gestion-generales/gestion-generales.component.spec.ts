import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGeneralesComponent } from './gestion-generales.component';

describe('GestionGeneralesComponent', () => {
  let component: GestionGeneralesComponent;
  let fixture: ComponentFixture<GestionGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionGeneralesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
