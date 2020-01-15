import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorGroupMainComponent } from './creditor-group-main.component';

describe('CreditorGroupMainComponent', () => {
  let component: CreditorGroupMainComponent;
  let fixture: ComponentFixture<CreditorGroupMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorGroupMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorGroupMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
