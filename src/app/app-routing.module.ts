import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'event-management',
    loadChildren: () =>
      import('./event-management/event-management.module').then(
        (m) => m.EventManagementModule,
      ),
  },
  {
    path: 'expense-management',
    loadChildren: () =>
      import('./expense-management/expense-management.module').then(
        (m) => m.ExpenseManagementModule,
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
