import { NgModule } from '@angular/core';
import { NZ_I18N, ja_JP } from 'ng-zorro-antd/i18n';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

const modules = [
  NzLayoutModule,
  NzMenuModule,
  NzBreadCrumbModule,
  NzButtonModule,
  NzDropDownModule,
  NzTagModule,
  NzTableModule,
  NzPopoverModule,
  NzFormModule,
  NzInputModule,
  NzDatePickerModule,
  NzSelectModule,
  NzCheckboxModule,
  NzSpinModule,
  NzSkeletonModule,
  NzTypographyModule,
  NzRadioModule,
  NzModalModule,
  NzTabsModule,
  NzPaginationModule,
  NzOverlayModule,
  NzToolTipModule,
  NzInputNumberModule,
  NzCardModule,
  NzDividerModule,
  NzSpaceModule,
  NzEmptyModule,
  NzMessageModule,
  NzListModule,
  NzTreeSelectModule,
  NzImageModule,
  NzAutocompleteModule,
  NzUploadModule,
];

@NgModule({
  declarations: [],
  providers: [{ provide: NZ_I18N, useValue: ja_JP }],

  imports: [...modules],
  exports: [...modules],
})
export class NzModule {}
