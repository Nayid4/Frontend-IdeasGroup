import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUsuariosLayoutComponent } from './gestion-usuarios-layout.component';

describe('GestionUsuariosLayoutComponent', () => {
  let component: GestionUsuariosLayoutComponent;
  let fixture: ComponentFixture<GestionUsuariosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionUsuariosLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionUsuariosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
