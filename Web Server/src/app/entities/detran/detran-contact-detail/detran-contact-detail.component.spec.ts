import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetranContactDetailComponent } from './detran-contact-detail.component';

describe('DetranContactDetailComponent', () => {
  let component: DetranContactDetailComponent;
  let fixture: ComponentFixture<DetranContactDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetranContactDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetranContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
