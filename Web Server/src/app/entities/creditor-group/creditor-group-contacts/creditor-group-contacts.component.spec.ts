import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorGroupContactComponent } from './creditor-group-contacts.component';

describe('CreditorGroupContactComponent', () => {
  let component: CreditorGroupContactComponent;
  let fixture: ComponentFixture<CreditorGroupContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorGroupContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorGroupContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
