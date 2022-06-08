import { Injectable } from '@angular/core';

import { SupabaseBaseService } from 'src/app/lib/supabase/supabase-base.service';
import { SupabaseClientService } from 'src/app/lib/supabase/supabase-client.service';

import { Observable } from 'rxjs/internal/Observable';

import { ApiResponse } from '../models';
import { IEvent } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventDataService extends SupabaseBaseService<IEvent> {
  constructor(protected override client: SupabaseClientService) {
    super(client, 'events');
  }

  getAll(): Observable<ApiResponse<IEvent[]>> {
    return this.find([]);
  }
}
