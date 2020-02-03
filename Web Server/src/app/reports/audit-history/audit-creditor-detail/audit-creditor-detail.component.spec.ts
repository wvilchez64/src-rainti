import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditCreditorDetailComponent } from './audit-creditor-detail.component';

describe('AuditCreditorDetailComponent', () => {
  let component: AuditCreditorDetailComponent;
  let fixture: ComponentFixture<AuditCreditorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditCreditorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditCreditorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
