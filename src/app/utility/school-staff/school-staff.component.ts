import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-school-staff',
  templateUrl: './school-staff.component.html',
  styleUrls: ['./school-staff.component.scss']
})
export class SchoolStaffComponent implements OnInit {

  staffViewMore = false;
  staffViewMoreId: string;
  staffViewLessId: string;
  satffSelected: string;

  @Input() carosuselStaffDataList: any;
  constructor() { }

  ngOnInit() {
    this.staffViewMoreId = 'View More';
  }

  public getStaffViewMore(staffData, flag) {
    this.satffSelected = staffData.labelType;
    if (this.staffViewMoreId === 'View More' && !this.staffViewMore) {
      this.staffViewMore = true;
      this.staffViewLessId = 'View Less';
    }
    if (this.staffViewLessId === 'View Less' && !flag) {
      this.staffViewMore = false;
      this.staffViewMoreId = 'View More';
    }
  }
}
