import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGeneralesLayoutComponent } from './datos-generales-layout.component';

describe('DatosGeneralesLayoutComponent', () => {
  let component: DatosGeneralesLayoutComponent;
  let fixture: ComponentFixture<DatosGeneralesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosGeneralesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosGeneralesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
