import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAspectoGeneralComponent } from './formulario-aspecto-general.component';

describe('FormularioAspectoGeneralComponent', () => {
  let component: FormularioAspectoGeneralComponent;
  let fixture: ComponentFixture<FormularioAspectoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAspectoGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAspectoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
