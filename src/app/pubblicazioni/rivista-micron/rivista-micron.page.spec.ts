import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RivistaMicronPage } from './rivista-micron.page';

describe('RivistaMicronPage', () => {
  let component: RivistaMicronPage;
  let fixture: ComponentFixture<RivistaMicronPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RivistaMicronPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
