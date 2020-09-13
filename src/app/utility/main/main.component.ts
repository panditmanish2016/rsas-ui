import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() carosuselGeneralDataList: any;
  @Input() carosuselStaffDataList: any;
  @Input() schoolContentGeneralDataList: any;
  @Input() latestUpadteLinkGeneralDataList: any;

  @Output() latestUpadteLinkDataWasClicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  public latestUpadteLinkGeneralDataWasClicked(latestUpadteLinkGeneralData: any) {
    this.latestUpadteLinkDataWasClicked.emit(latestUpadteLinkGeneralData);
  }
}
