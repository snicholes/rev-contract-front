import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricBoxComponent } from './rubric-box.component';

describe('RubricBoxComponent', () => {
  let component: RubricBoxComponent;
  let fixture: ComponentFixture<RubricBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubricBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
