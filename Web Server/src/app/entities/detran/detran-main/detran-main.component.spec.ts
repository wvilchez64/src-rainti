import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetranMainComponent } from './detran-main.component';

describe('DetranMainComponent', () => {
  let component: DetranMainComponent;
  let fixture: ComponentFixture<DetranMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetranMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetranMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
