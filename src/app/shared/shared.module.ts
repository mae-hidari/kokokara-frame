import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModule } from '../lib/nz/nz.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [CommonModule, NzModule],
  exports: [NzModule, SideMenuComponent],
})
export class SharedModule {}
