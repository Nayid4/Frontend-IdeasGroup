import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEnfermedadComponent } from './lista-enfermedad.component';

describe('ListaEnfermedadComponent', () => {
  let component: ListaEnfermedadComponent;
  let fixture: ComponentFixture<ListaEnfermedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEnfermedadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEnfermedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
