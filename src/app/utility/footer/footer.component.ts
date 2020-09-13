import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  navItemListFiltered: any;
  footerAddressFiltered: any;
  footerSocialLinkFiltered: any;
  @Input() navItemList: any;
  @Input() footerGeneralDataList: any;
  @Output() navItemWasClicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.getNavItemListFiltered();
    this.getFooterGeneralDataFiltered();
  }

  public navItemClicked(navItem: any) {
    this.navItemWasClicked.emit(navItem);
  }

  public getNavItemListFiltered() {
    this.navItemListFiltered = new Array();
    for (const navItem of this.navItemList) {
      if (navItem !== null && navItem.i18NSubLabelList.length !== 0) {
        this.navItemListFiltered.push(navItem);
      }
    }
  }

  public getFooterGeneralDataFiltered() {
    this.footerAddressFiltered = new Array();
    this.footerSocialLinkFiltered = new Array();
    for (const footerData of this.footerGeneralDataList) {
      if (footerData !== null && footerData.labelType === 'address') {
        this.footerAddressFiltered.push(footerData);
      } else if (footerData !== null && footerData.labelType === 'socialIcon') {
        this.footerSocialLinkFiltered.push(footerData);
      }
    }
  }
}
