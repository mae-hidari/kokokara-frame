import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Event } from 'src/app/core/models/event';

import { Component, OnInit } from '@angular/core';

import { AddEventFormComponent } from '../../components/add-event-form/add-event-form.component';
import { EventQuery, EventService } from '../../state';

type createEventRequest = Omit<Event, 'id' | 'createdAt'>;

@Component({
  selector: 'app-event-management-page',
  templateUrl: './event-management-page.component.html',
  styleUrls: ['./event-management-page.component.less'],
})
export class EventManagementPageComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private eventQuery: EventQuery,
    private modal: NzModalService,
    private msg: NzMessageService,
  ) {}

  list$ = this.eventQuery.selectAll();
  loading$ = this.eventQuery.selectLoading();

  ngOnInit(): void {
    this.eventService.getAll().subscribe();
  }

  onClickAdd() {
    this.modal.create({
      nzTitle: 'イベント登録',
      nzContent: AddEventFormComponent,
      nzOkText: '登録',
      nzWidth: '680px',
      nzComponentParams: { loading$: this.loading$ },
      nzOnOk: (component) => {
        this.createEvent(component.form.value);
      },
    });
  }

  private createEvent(event: createEventRequest) {
    this.eventService.create(event).subscribe({
      next: () => {
        this.msg.success('イベントを登録しました。');
      },
      error: () => {
        this.msg.error('イベントの登録に失敗しました。');
      },
    });
  }
}
