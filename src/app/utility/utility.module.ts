import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilityRoutingModule } from './utility-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CarouselComponent } from './carousel/carousel.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { YoutubeApiComponent } from './youtube-api/youtube-api.component';
import { SchoolStaffComponent } from './school-staff/school-staff.component';
import { SchoolContentComponent } from './school-content/school-content.component';
import { LatestUpdateLinkComponent } from './latest-update-link/latest-update-link.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';




@NgModule({
  declarations: [NavbarComponent, FooterComponent, MainComponent, CarouselComponent,
    YoutubeApiComponent, SchoolStaffComponent, SchoolContentComponent, LatestUpdateLinkComponent,
     SafeUrlPipe],
  imports: [
    CommonModule,
    UtilityRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    LayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatCarouselModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MainComponent,
    CarouselComponent,
    YoutubeApiComponent,
    SchoolStaffComponent,
    SchoolContentComponent,
    LatestUpdateLinkComponent,
    SafeUrlPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UtilityModule { }
