import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExpenseManagementRoutingModule } from './expense-management-routing.module';

import { ExpenseManagementPageComponent } from './pages/expense-management-page/expense-management-page.component';

@NgModule({
  declarations: [ExpenseManagementPageComponent],
  imports: [CommonModule, SharedModule, ExpenseManagementRoutingModule],
})
export class ExpenseManagementModule {}
