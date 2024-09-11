import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTramitesInstitucionalesComponent } from './formulario-tramites-institucionales.component';

describe('FormularioTramitesInstitucionalesComponent', () => {
  let component: FormularioTramitesInstitucionalesComponent;
  let fixture: ComponentFixture<FormularioTramitesInstitucionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioTramitesInstitucionalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioTramitesInstitucionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
