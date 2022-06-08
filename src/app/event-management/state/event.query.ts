import { QueryEntity } from '@datorama/akita';

import { Injectable } from '@angular/core';

import { EventState, EventStore } from './event.store';

@Injectable({ providedIn: 'root' })
export class EventQuery extends QueryEntity<EventState> {
  constructor(protected override store: EventStore) {
    super(store);
  }
}
