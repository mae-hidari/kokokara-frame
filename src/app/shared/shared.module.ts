import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzModule } from '../lib/nz/nz.module';

import { BaseButtonComponent } from './components/base-button/base-button.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent,
    ContentContainerComponent,
    BaseButtonComponent,
  ],
  imports: [CommonModule, NzModule, RouterModule],
  exports: [
    NzModule,
    SideMenuComponent,
    ContentContainerComponent,
    BaseButtonComponent,
  ],
})
export class SharedModule {}
