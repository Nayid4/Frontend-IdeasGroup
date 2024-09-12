import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrdLayoutComponent } from './pqrd-layout.component';

describe('PqrsLayoutComponent', () => {
  let component: PqrdLayoutComponent;
  let fixture: ComponentFixture<PqrdLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PqrdLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PqrdLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
