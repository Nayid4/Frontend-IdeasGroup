import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEnfermedadComponent } from './formulario-enfermedad.component';

describe('FormularioEnfermedadComponent', () => {
  let component: FormularioEnfermedadComponent;
  let fixture: ComponentFixture<FormularioEnfermedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEnfermedadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEnfermedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
