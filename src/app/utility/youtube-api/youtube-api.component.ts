import { Component, OnInit, Input } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-api',
  templateUrl: './youtube-api.component.html',
  styleUrls: ['./youtube-api.component.scss']
})
export class YoutubeApiComponent implements OnInit {

  @Input() youTubeVideoId: string;
  youTubeVideoIdFiltered: any;
  youTubeVideoEmbed: any;
  constructor() { }

  ngOnInit() {
    this.youTubeVideoEmbed = 'https://www.youtube.com/embed/';
    this.youTubeVideoIdFiltered = this.youTubeVideoEmbed + this.youTubeVideoId;
  }

}
