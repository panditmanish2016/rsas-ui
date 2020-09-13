import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-school-content',
  templateUrl: './school-content.component.html',
  styleUrls: ['./school-content.component.scss']
})
export class SchoolContentComponent implements OnInit {

  readMoreOnSchoolImage: boolean;
  readMoreOnSchoolVideo: boolean;
  readMoreOnSchoolImageDataId: string;
  readMoreOnSchoolVideoDataId: string;
  schoolContentGeneralImageDataFiltered: any;
  schoolContentGeneralYouTubeDataFiltered: any;
  @Input() schoolContentGeneralDataList: any;
  constructor() { }

  ngOnInit() {
    this.readMoreOnSchoolImageDataId = 'Read More';
    this.readMoreOnSchoolVideoDataId = 'Read More';
    this.getSchoolContentGenralDataList();
  }

  public getReadMoreOnSchoolImage() {
    if (this.readMoreOnSchoolImageDataId === 'Read More') {
      this.readMoreOnSchoolImage = true;
      this.readMoreOnSchoolImageDataId = 'Read Less';
    } else if (this.readMoreOnSchoolImageDataId === 'Read Less') {
      this.readMoreOnSchoolImage = false;
      this.readMoreOnSchoolImageDataId = 'Read More';
    }
  }

  public getReadMoreOnSchoolVideo() {
    if (this.readMoreOnSchoolVideoDataId === 'Read More') {
      this.readMoreOnSchoolVideo = true;
      this.readMoreOnSchoolVideoDataId = 'Read Less';
    } else if (this.readMoreOnSchoolVideoDataId === 'Read Less') {
      this.readMoreOnSchoolVideo = false;
      this.readMoreOnSchoolVideoDataId = 'Read More';
    }
  }

  getSchoolContentGenralDataList() {
    this.schoolContentGeneralImageDataFiltered = new Array();
    this.schoolContentGeneralYouTubeDataFiltered = new Array();
    for (const schoolContentData of this.schoolContentGeneralDataList) {
      if (schoolContentData !== null && schoolContentData.mediaType === 'image') {
        this.schoolContentGeneralImageDataFiltered.push(schoolContentData);
      } else if (schoolContentData !== null && schoolContentData.mediaType === 'video') {
        this.schoolContentGeneralYouTubeDataFiltered.push(schoolContentData);
      }
    }
  }
}
