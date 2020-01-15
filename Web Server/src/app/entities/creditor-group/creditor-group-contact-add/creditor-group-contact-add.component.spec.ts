import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorGroupContactAddComponent } from './creditor-group-contact-add.component';

describe('CreditorGroupContactAddComponent', () => {
  let component: CreditorGroupContactAddComponent;
  let fixture: ComponentFixture<CreditorGroupContactAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorGroupContactAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorGroupContactAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
