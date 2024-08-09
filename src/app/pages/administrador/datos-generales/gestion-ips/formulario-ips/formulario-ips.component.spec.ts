import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIPSComponent } from './formulario-ips.component';

describe('FormularioIPSComponent', () => {
  let component: FormularioIPSComponent;
  let fixture: ComponentFixture<FormularioIPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioIPSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioIPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
