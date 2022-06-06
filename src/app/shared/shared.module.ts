import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzModule } from '../lib/nz/nz.module';

import { ContentContainerComponent } from './components/content-container/content-container.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [SideMenuComponent, ContentContainerComponent],
  imports: [CommonModule, NzModule, RouterModule],
  exports: [NzModule, SideMenuComponent, ContentContainerComponent],
})
export class SharedModule {}
