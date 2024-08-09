import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionIPSLayoutComponent } from './gestion-ipslayout.component';

describe('GestionIPSLayoutComponent', () => {
  let component: GestionIPSLayoutComponent;
  let fixture: ComponentFixture<GestionIPSLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionIPSLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionIPSLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
