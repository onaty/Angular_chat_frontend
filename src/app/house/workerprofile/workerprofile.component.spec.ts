import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerprofileComponent } from './workerprofile.component';

describe('WorkerprofileComponent', () => {
  let component: WorkerprofileComponent;
  let fixture: ComponentFixture<WorkerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
