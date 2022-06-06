import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-management-page',
  templateUrl: './event-management-page.component.html',
  styleUrls: ['./event-management-page.component.less'],
})
export class EventManagementPageComponent implements OnInit {
  listOfData = [
    {
      key: '1',
      date: '2022/05/28（土） 10:00〜',
      name: '【大阪・IT】ココカラ勉強会 No.9',
      address: '大阪府大阪市中央区南船場2-3-6',
      numberOfParticipants: 28,
    },
    {
      key: '2',
      date: '2022/05/28（土） 10:00〜',
      name: '【大阪・IT】ココカラ勉強会 No.9',
      address: '大阪府大阪市中央区南船場2-3-6',
      numberOfParticipants: 28,
    },
    {
      key: '3',
      date: '2022/05/28（土） 10:00〜',
      name: '【大阪・IT】ココカラ勉強会 No.9',
      address: '大阪府大阪市中央区南船場2-3-6',
      numberOfParticipants: 28,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
