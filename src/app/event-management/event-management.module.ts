import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { EventManagementRoutingModule } from './event-management-routing.module';

import { AddEventFormComponent } from './components/add-event-form/add-event-form.component';
import { EventManagementPageComponent } from './pages/event-management-page/event-management-page.component';

@NgModule({
  declarations: [EventManagementPageComponent, AddEventFormComponent],
  imports: [
    CommonModule,
    EventManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class EventManagementModule {}
