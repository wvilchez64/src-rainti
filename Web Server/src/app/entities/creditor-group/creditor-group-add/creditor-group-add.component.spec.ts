import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorGroupAddComponent } from './creditor-group-add.component';

describe('CreditorGroupAddComponent', () => {
  let component: CreditorGroupAddComponent;
  let fixture: ComponentFixture<CreditorGroupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorGroupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorGroupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
