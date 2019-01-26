import { TestBed, inject } from '@angular/core/testing';

import { GroupchatsocketService } from './groupchatsocket.service';

describe('GroupchatsocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupchatsocketService]
    });
  });

  it('should be created', inject([GroupchatsocketService], (service: GroupchatsocketService) => {
    expect(service).toBeTruthy();
  }));
});
