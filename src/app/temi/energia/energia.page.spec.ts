import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnergiaPage } from './energia.page';

describe('EnergiaPage', () => {
  let component: EnergiaPage;
  let fixture: ComponentFixture<EnergiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
