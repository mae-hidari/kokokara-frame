import { TestBed } from '@angular/core/testing';

import { SupabaseBaseService } from './supabase-base.service';

describe('SupabaseBaseService', () => {
  let service: SupabaseBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabaseBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
