import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {


  carosuselSlideDataFiltered: any;
  @Input() carosuselGeneralDataList: any;
  constructor() { }


  ngOnInit() {
    this.getCarosuselSlideDataFiltered();
  }

  /* this method implements the full path for images
  since from back end only image name is coming so we need to construct
   relative path and put into [src] tag in html side */
  getCarosuselSlideDataFiltered() {
    this.carosuselSlideDataFiltered = new Array();
    for (const carouselItem of this.carosuselGeneralDataList) {
      if (carouselItem !== null) {
        const path = 'assets/images/carousel/';
        const iconType = '.jpg';
        carouselItem.socialIcon = path + carouselItem.socialIcon + iconType;
        this.carosuselSlideDataFiltered.push(carouselItem);
      }
    }
  }




}
