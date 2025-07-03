import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuPiuTemiPage } from './su-piu-temi.page';

describe('SuPiuTemiPage', () => {
  let component: SuPiuTemiPage;
  let fixture: ComponentFixture<SuPiuTemiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuPiuTemiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
