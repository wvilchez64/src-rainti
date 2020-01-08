import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetranContactsComponent } from './detran-contacts.component';

describe('DetranContactsComponent', () => {
  let component: DetranContactsComponent;
  let fixture: ComponentFixture<DetranContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetranContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetranContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
