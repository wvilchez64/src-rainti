import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetranDetailComponent } from './detran-detail.component';

describe('DetranDetailComponent', () => {
  let component: DetranDetailComponent;
  let fixture: ComponentFixture<DetranDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetranDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetranDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
