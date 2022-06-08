import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { EventManagementPageComponent } from './pages/event-management-page/event-management-page.component';

const routes: Route[] = [
  {
    path: '',
    component: EventManagementPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventManagementRoutingModule {}
