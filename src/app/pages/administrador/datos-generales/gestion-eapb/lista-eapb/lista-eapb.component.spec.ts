import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEAPBComponent } from './lista-eapb.component';

describe('ListaEAPBComponent', () => {
  let component: ListaEAPBComponent;
  let fixture: ComponentFixture<ListaEAPBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEAPBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEAPBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
