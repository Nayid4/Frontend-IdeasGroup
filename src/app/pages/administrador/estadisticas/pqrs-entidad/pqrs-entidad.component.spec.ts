import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrsEntidadComponent } from './pqrs-entidad.component';

describe('PqrsEntidadComponent', () => {
  let component: PqrsEntidadComponent;
  let fixture: ComponentFixture<PqrsEntidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PqrsEntidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PqrsEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
