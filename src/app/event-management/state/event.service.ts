import { map, tap } from 'rxjs';
import { EventDataService } from 'src/app/core/api';
import { Event, createEvent, createInsertEvent } from 'src/app/core/models';

import { Injectable } from '@angular/core';

import { EventStore } from './event.store';

@Injectable({ providedIn: 'root' })
export class EventService {
  constructor(
    private eventStore: EventStore,
    private eventDataService: EventDataService,
  ) {}

  getAll() {
    this.eventStore.setLoading(true);
    return this.eventDataService.getAll().pipe(
      map((res) => ({ ...res, data: res.data?.map(createEvent) })),
      tap((mappedRes) => {
        if (mappedRes.error) {
          this.eventStore.setError(mappedRes.error);
        } else {
          this.eventStore.set(mappedRes.data);
        }
        this.eventStore.setLoading(false);
      }),
    );
  }

  create(event: Omit<Event, 'id' | 'createdAt'>) {
    this.eventStore.setLoading(true);
    return this.eventDataService.create(createInsertEvent(event)).pipe(
      map((res) => ({ ...res, data: createEvent(res.data) })),
      tap((mappedRes) => {
        if (mappedRes.error) {
          this.eventStore.setError(mappedRes.error);
        } else {
          this.eventStore.upsert(mappedRes.data.id, mappedRes.data);
        }
        this.eventStore.setLoading(false);
      }),
    );
  }
}
