import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrsLayoutComponent } from './pqrs-layout.component';

describe('PqrsLayoutComponent', () => {
  let component: PqrsLayoutComponent;
  let fixture: ComponentFixture<PqrsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PqrsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PqrsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
