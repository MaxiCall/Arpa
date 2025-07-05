import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RumorePage } from './rumore.page';

describe('RumorePage', () => {
  let component: RumorePage;
  let fixture: ComponentFixture<RumorePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RumorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
