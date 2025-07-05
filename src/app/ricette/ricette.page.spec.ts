import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RicettePage } from './ricette.page';

describe('RicettePage', () => {
  let component: RicettePage;
  let fixture: ComponentFixture<RicettePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RicettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
