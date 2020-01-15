import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorAddComponent } from './creditor-add.component';

describe('CreditorAddComponent', () => {
  let component: CreditorAddComponent;
  let fixture: ComponentFixture<CreditorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
