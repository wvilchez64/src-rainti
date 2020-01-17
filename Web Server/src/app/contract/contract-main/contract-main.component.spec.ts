import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractMainComponent } from './contract-main.component';

describe('ContractMainComponent', () => {
  let component: ContractMainComponent;
  let fixture: ComponentFixture<ContractMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
