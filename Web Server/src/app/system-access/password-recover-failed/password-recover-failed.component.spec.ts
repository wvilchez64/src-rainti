import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoverFailedComponent } from './password-recover-failed.component';

describe('PasswordRecoverFailedComponent', () => {
  let component: PasswordRecoverFailedComponent;
  let fixture: ComponentFixture<PasswordRecoverFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordRecoverFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRecoverFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
