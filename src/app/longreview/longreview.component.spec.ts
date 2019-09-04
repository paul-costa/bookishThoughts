import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongreviewComponent } from './longreview.component';

describe('LongreviewComponent', () => {
  let component: LongreviewComponent;
  let fixture: ComponentFixture<LongreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
