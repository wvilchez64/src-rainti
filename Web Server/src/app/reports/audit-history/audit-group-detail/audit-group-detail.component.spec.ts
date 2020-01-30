import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditGroupDetailComponent } from './audit-group-detail.component';

describe('AuditGroupDetailComponent', () => {
  let component: AuditGroupDetailComponent;
  let fixture: ComponentFixture<AuditGroupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditGroupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
