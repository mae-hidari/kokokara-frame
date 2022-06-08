import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, map, startWith } from 'rxjs';
import { loadConnpassIcs } from 'src/app/core/utils/loadConnpassIcs';

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.less'],
})
export class AddEventFormComponent implements OnInit {
  @Input()
  loading$ = new Observable<boolean>();

  readonly form = this.formBuilder.group({
    name: this.formBuilder.control('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    startDate: null,
    endDate: null,
    location: '',
    url: '',
    capacity: this.formBuilder.control(0, [
      Validators.required,
      Validators.min(1),
    ]),
  });

  constructor(
    private msg: NzMessageService,
    private modalRef: NzModalRef<AddEventFormComponent, void>,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    // 登録ボタンの活性状態
    this.form.statusChanges
      .pipe(
        untilDestroyed(this),
        startWith(null),
        map(() => this.form.invalid),
      )
      .subscribe((invalid) => {
        if (invalid === this.modalRef.getConfig()?.nzOkDisabled) {
          return;
        }

        this.modalRef.updateConfig({
          nzOkDisabled: invalid,
        });
      });

    // 登録ボタンのローディング
    this.loading$.pipe(untilDestroyed(this)).subscribe((loading) => {
      if (loading === this.modalRef.getConfig()?.nzOkLoading) {
        return;
      }
      this.modalRef.updateConfig({
        nzOkLoading: loading,
      });
    });
  }

  onUpload = (file: NzUploadFile): boolean => {
    // icsを読み込み
    loadConnpassIcs(file as unknown as File, {
      success: ({ name, startDate, endDate, location, url }) => {
        // フォームに設定
        this.form.controls['name'].setValue(name);
        this.form.controls['startDate'].setValue(startDate);
        this.form.controls['endDate'].setValue(endDate);
        this.form.controls['location'].setValue(location);
        this.form.controls['url'].setValue(url);

        this.msg.info('イベント情報を読み込みました。');
      },
      error: () => {
        this.msg.error('イベントの読み込みに失敗しました。');
      },
    });

    return false;
  };
}
