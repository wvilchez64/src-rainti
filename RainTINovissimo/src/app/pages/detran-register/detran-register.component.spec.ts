import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetranRegisterComponent } from './detran-register.component';

describe('DetranRegisterComponent', () => {
  let component: DetranRegisterComponent;
  let fixture: ComponentFixture<DetranRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetranRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetranRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
