import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiaPage } from './aia.page';

describe('AiaPage', () => {
  let component: AiaPage;
  let fixture: ComponentFixture<AiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
