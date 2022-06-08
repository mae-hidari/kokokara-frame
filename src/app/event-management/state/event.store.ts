import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Event } from 'src/app/core/models/event';

import { Injectable } from '@angular/core';

export interface EventState extends EntityState<Event> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'event',
})
export class EventStore extends EntityStore<EventState> {
  constructor() {
    super();
  }
}
