import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-latest-update-link',
  templateUrl: './latest-update-link.component.html',
  styleUrls: ['./latest-update-link.component.scss']
})
export class LatestUpdateLinkComponent implements OnInit {


  viewMoreLatestUpdatesAndLinks: boolean;
  viewMoreLatestTechEvents: boolean;
  viewMoreUpdateLinkId: any;
  viewMoreTechEventId: any;
  @Input() latestUpadteLinkGeneralDataList: any;
  @Output() latestUpadteLinkGeneralDataWasClicked = new EventEmitter<any>();

  /* this data is for updates and important links */
  updatesAndLinksDataFiltered: any;
  /* this data is for updates and tech events */
  updatesAndTechEventsDataFiltered: any;

  constructor() { }

  ngOnInit() {
    this.viewMoreUpdateLinkId = 'View More';
    this.viewMoreTechEventId = 'View More';
    this.getLatestUpadteLinkGeneralDataList();
  }

  public getViewMoreLatestUpdatesAndLinks() {
    if (this.viewMoreUpdateLinkId === 'View More') {
      this.viewMoreLatestUpdatesAndLinks = true;
      this.viewMoreUpdateLinkId = 'View Less';
    } else if (this.viewMoreUpdateLinkId === 'View Less') {
      this.viewMoreLatestUpdatesAndLinks = false;
      this.viewMoreUpdateLinkId = 'View More';
    }
  }

  public getViewMoreLatestTechEvents() {
    if (this.viewMoreTechEventId === 'View More') {
      this.viewMoreLatestTechEvents = true;
      this.viewMoreTechEventId = 'View Less';
    } else if (this.viewMoreTechEventId === 'View Less') {
      this.viewMoreLatestTechEvents = false;
      this.viewMoreTechEventId = 'View More';
    }
  }

  public getLatestUpadteLinkGeneralDataList() {
    this.updatesAndLinksDataFiltered = new Array();
    this.updatesAndTechEventsDataFiltered = new Array();
    for (const updateAndLinkEvent of this.latestUpadteLinkGeneralDataList) {
      if (updateAndLinkEvent.updateType === 'updateAndLink') {
        this.updatesAndLinksDataFiltered.push(updateAndLinkEvent);
      } else if (updateAndLinkEvent.updateType === 'updateAndTechEvent') {
        this.updatesAndTechEventsDataFiltered.push(updateAndLinkEvent);
      }
    }
  }

  public latestUpadteLinkGeneralDataClicked(latestUpadteLinkGeneralData: any) {
    this.latestUpadteLinkGeneralDataWasClicked.emit(latestUpadteLinkGeneralData);
  }
}
