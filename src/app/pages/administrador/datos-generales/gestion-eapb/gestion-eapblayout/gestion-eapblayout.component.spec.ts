import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEAPBLayoutComponent } from './gestion-eapblayout.component';

describe('GestionEAPBLayoutComponent', () => {
  let component: GestionEAPBLayoutComponent;
  let fixture: ComponentFixture<GestionEAPBLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEAPBLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEAPBLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
