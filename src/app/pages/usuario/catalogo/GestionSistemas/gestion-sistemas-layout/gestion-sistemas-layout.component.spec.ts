import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSistemasLayoutComponent } from './gestion-sistemas-layout.component';

describe('GestionSistemasLayoutComponent', () => {
  let component: GestionSistemasLayoutComponent;
  let fixture: ComponentFixture<GestionSistemasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionSistemasLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionSistemasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
