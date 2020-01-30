import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBillingComponent } from './transaction-billing.component';

describe('TransactionBillingComponent', () => {
  let component: TransactionBillingComponent;
  let fixture: ComponentFixture<TransactionBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
