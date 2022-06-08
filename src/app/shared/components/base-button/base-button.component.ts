import { NzButtonType } from 'ng-zorro-antd/button';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.less'],
})
export class BaseButtonComponent {
  @Input()
  buttonType?: NzButtonType;

  @Input()
  iconType?: string;
}
