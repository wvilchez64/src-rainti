import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorContactAddComponent } from './creditor-contact-add.component';

describe('CreditorContactAddComponent', () => {
  let component: CreditorContactAddComponent;
  let fixture: ComponentFixture<CreditorContactAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorContactAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorContactAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
