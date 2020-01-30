import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditDetranDetailComponent } from './audit-detran-detail.component';

describe('AuditDetranDetailComponent', () => {
  let component: AuditDetranDetailComponent;
  let fixture: ComponentFixture<AuditDetranDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditDetranDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditDetranDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
