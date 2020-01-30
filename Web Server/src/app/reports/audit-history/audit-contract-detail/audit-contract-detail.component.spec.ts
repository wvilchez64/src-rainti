import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditContractDetailComponent } from './audit-contract-detail.component';

describe('AuditContractDetailComponent', () => {
  let component: AuditContractDetailComponent;
  let fixture: ComponentFixture<AuditContractDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditContractDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditContractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
