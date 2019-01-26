import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chatpage1Component } from './chatpage1.component';

describe('Chatpage1Component', () => {
  let component: Chatpage1Component;
  let fixture: ComponentFixture<Chatpage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chatpage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chatpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
