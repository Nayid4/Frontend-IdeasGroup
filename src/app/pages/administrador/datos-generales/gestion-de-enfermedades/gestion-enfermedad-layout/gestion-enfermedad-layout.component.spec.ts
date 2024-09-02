import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEnfermedadLayoutComponent } from './gestion-enfermedad-layout.component';

describe('GestionEnfermedadLayoutComponent', () => {
  let component: GestionEnfermedadLayoutComponent;
  let fixture: ComponentFixture<GestionEnfermedadLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEnfermedadLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEnfermedadLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
