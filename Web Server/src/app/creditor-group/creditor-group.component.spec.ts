import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorGroupComponent } from './creditor-group.component';

describe('CreditorGroupComponent', () => {
  let component: CreditorGroupComponent;
  let fixture: ComponentFixture<CreditorGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
