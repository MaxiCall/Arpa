import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VasPage } from './vas.page';

describe('VasPage', () => {
  let component: VasPage;
  let fixture: ComponentFixture<VasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
