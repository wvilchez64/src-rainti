import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorContactDetailComponent } from './creditor-contact-detail.component';

describe('CreditorContactDetailComponent', () => {
  let component: CreditorContactDetailComponent;
  let fixture: ComponentFixture<CreditorContactDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorContactDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
