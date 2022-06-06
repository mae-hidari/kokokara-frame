import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { EventManagementRoutingModule } from './event-management-routing.module';

import { EventManagementPageComponent } from './pages/event-management-page/event-management-page.component';

@NgModule({
  declarations: [EventManagementPageComponent],
  imports: [CommonModule, EventManagementRoutingModule, SharedModule],
})
export class EventManagementModule {}
