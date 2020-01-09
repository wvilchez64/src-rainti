import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoverSuccessComponent } from './password-recover-success.component';

describe('PasswordRecoverSuccessComponent', () => {
  let component: PasswordRecoverSuccessComponent;
  let fixture: ComponentFixture<PasswordRecoverSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordRecoverSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRecoverSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
