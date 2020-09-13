import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { I18NLabel } from '../utility.shared';
import { MatMenuTrigger } from '@angular/material/menu';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild(MatMenuTrigger, null) trigger: MatMenuTrigger;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @Input() navItemList: any;
  @Output() navItemWasClicked = new EventEmitter<any>();
  constructor(private breakpointObserver: BreakpointObserver) {
  }
  ngOnInit(): void {
  }
  public navItemClicked(navItem: any) {
    this.navItemWasClicked.emit(navItem);
  }

  public openAndCloseMenu(navItem: I18NLabel) {
    if (navItem.i18NSubLabelList.length !== 0 && !(this.isHandset$)) {
      this.trigger.openMenu();
    } else {
      this.trigger.closeMenu();
    }
  }
}
