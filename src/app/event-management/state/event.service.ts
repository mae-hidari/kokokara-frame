import { map, tap } from 'rxjs';
import { EventDataService } from 'src/app/core/api';
import { createEvent } from 'src/app/core/models/event';

import { Injectable } from '@angular/core';

import { EventStore } from './event.store';

@Injectable({ providedIn: 'root' })
export class EventService {
  constructor(
    private eventStore: EventStore,
    private eventDataService: EventDataService,
  ) {}

  getAll() {
    return this.eventDataService.getAll().pipe(
      map((res) => ({ ...res, data: res.data.map(createEvent) })),
      tap((mappedRes) => {
        if (mappedRes.error) {
          this.eventStore.setError(mappedRes.error);
        }
        this.eventStore.set(mappedRes.data);
      }),
    );
  }
}
