import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerviewrequestpageComponent } from './workerviewrequestpage.component';

describe('WorkerviewrequestpageComponent', () => {
  let component: WorkerviewrequestpageComponent;
  let fixture: ComponentFixture<WorkerviewrequestpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerviewrequestpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerviewrequestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
