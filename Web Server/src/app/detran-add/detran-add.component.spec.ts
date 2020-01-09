import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetranAddComponent } from './detran-add.component';

describe('DetranAddComponent', () => {
  let component: DetranAddComponent;
  let fixture: ComponentFixture<DetranAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetranAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetranAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
