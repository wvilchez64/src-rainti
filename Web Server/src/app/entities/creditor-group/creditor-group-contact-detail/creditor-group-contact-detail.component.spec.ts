import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorGroupContactDetailComponent } from './creditor-group-contact-detail.component';

describe('CreditorGroupContactDetailComponent', () => {
  let component: CreditorGroupContactDetailComponent;
  let fixture: ComponentFixture<CreditorGroupContactDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorGroupContactDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorGroupContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
