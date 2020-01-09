import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetranContactAddComponent } from './detran-contact-add.component';

describe('DetranContactAddComponent', () => {
  let component: DetranContactAddComponent;
  let fixture: ComponentFixture<DetranContactAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetranContactAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetranContactAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
