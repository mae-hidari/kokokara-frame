import { Component, OnInit } from '@angular/core';

import { EventQuery, EventService } from '../../state';

@Component({
  selector: 'app-event-management-page',
  templateUrl: './event-management-page.component.html',
  styleUrls: ['./event-management-page.component.less'],
})
export class EventManagementPageComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private eventQuery: EventQuery,
  ) {}

  list$ = this.eventQuery.selectAll();

  ngOnInit(): void {
    this.eventService.getAll().subscribe();
  }
}
