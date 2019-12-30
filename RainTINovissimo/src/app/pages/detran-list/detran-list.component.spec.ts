import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetranComponent } from './detran-list.component';

describe('DetranComponent', () => {
  let component: DetranComponent;
  let fixture: ComponentFixture<DetranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
