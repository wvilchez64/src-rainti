import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorContactsComponent } from './creditor-contacts.component';

describe('CreditorContactsComponent', () => {
  let component: CreditorContactsComponent;
  let fixture: ComponentFixture<CreditorContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
