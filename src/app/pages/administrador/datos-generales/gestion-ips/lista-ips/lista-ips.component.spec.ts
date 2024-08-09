import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIPSComponent } from './lista-ips.component';

describe('ListaIPSComponent', () => {
  let component: ListaIPSComponent;
  let fixture: ComponentFixture<ListaIPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaIPSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaIPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
