import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DettagliSemiPage } from './dettagli-semi.page';

describe('DettagliSemiPage', () => {
  let component: DettagliSemiPage;
  let fixture: ComponentFixture<DettagliSemiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliSemiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
