import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorDetailComponent } from './creditor-detail.component';

describe('CreditorDetailComponent', () => {
  let component: CreditorDetailComponent;
  let fixture: ComponentFixture<CreditorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
