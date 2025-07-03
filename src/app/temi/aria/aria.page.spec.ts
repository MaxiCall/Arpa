import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AriaPage } from './aria.page';

describe('AriaPage', () => {
  let component: AriaPage;
  let fixture: ComponentFixture<AriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
