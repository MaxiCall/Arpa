import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViaPage } from './via.page';

describe('ViaPage', () => {
  let component: ViaPage;
  let fixture: ComponentFixture<ViaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
