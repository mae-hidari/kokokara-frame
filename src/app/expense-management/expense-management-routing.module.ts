import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ExpenseManagementPageComponent } from './pages/expense-management-page/expense-management-page.component';

const routes: Route[] = [
  {
    path: '',
    component: ExpenseManagementPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseManagementRoutingModule {}
