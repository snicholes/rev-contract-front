import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivScoresComponent } from './indiv-scores.component';

describe('IndivScoresComponent', () => {
  let component: IndivScoresComponent;
  let fixture: ComponentFixture<IndivScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndivScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
