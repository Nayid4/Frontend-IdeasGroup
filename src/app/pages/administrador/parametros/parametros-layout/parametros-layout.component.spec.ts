import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosLayoutComponent } from './parametros-layout.component';

describe('ParametrosLayoutComponent', () => {
  let component: ParametrosLayoutComponent;
  let fixture: ComponentFixture<ParametrosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametrosLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
