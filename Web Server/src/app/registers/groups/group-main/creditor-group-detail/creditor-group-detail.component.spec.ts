import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorGroupDetailComponent } from './creditor-group-detail.component';

describe('CreditorGroupDetailComponent', () => {
  let component: CreditorGroupDetailComponent;
  let fixture: ComponentFixture<CreditorGroupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorGroupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
