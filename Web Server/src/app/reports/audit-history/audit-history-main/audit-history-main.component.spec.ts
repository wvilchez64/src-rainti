import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditHistoryMainComponent } from './audit-history-main.component';

describe('AuditHistoryMainComponent', () => {
  let component: AuditHistoryMainComponent;
  let fixture: ComponentFixture<AuditHistoryMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditHistoryMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditHistoryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
