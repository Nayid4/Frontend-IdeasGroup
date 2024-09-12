import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPqrdComponent } from './formulario-pqrd.component';

describe('FormularioPqrdComponent', () => {
  let component: FormularioPqrdComponent;
  let fixture: ComponentFixture<FormularioPqrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPqrdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPqrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
