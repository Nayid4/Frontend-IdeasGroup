import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEAPBComponent } from './formulario-eapb.component';

describe('FormularioEAPBComponent', () => {
  let component: FormularioEAPBComponent;
  let fixture: ComponentFixture<FormularioEAPBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEAPBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEAPBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
