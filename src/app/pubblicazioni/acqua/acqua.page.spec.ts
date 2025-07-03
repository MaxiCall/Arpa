import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcquaPage } from './acqua.page';

describe('AcquaPage', () => {
  let component: AcquaPage;
  let fixture: ComponentFixture<AcquaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
