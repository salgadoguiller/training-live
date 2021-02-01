import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Colors } from 'src/app/utilities/enums';

@Component({
  selector: 'tr-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() public color: Colors = Colors.GREEN;
  @Input() public title: string = 'Title';
  @Input() public description: string = 'Description';
  @Input() image: string = 'https://liuwagtailprod.blob.core.windows.net/lni-wagtail-prod/images/Planeacion-y-organizacion.original.format-jpeg.jpg';

  public insideImage;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    switch (this.color) {
      case Colors.BLUE:
        this.insideImage = 'https://storage.googleapis.com/portal-assets-prod/dtQrvgVlFP2VWV5IpTGZP5w179Wf9lad95vh9JHI/images/images/banner-mask--blue.svg';
        break;

      case Colors.GREEN:
        this.insideImage = 'https://storage.googleapis.com/portal-assets-prod/dtQrvgVlFP2VWV5IpTGZP5w179Wf9lad95vh9JHI/images/images/banner-mask--green.svg';
        break;

      case Colors.PURPLE:
        this.insideImage = 'https://storage.googleapis.com/portal-assets-prod/dtQrvgVlFP2VWV5IpTGZP5w179Wf9lad95vh9JHI/images/images/banner-mask--purple.svg';
        break;

      case Colors.YELLOW:
        this.insideImage = 'https://storage.googleapis.com/portal-assets-prod/dtQrvgVlFP2VWV5IpTGZP5w179Wf9lad95vh9JHI/images/images/banner-mask--yellow.svg';
        break;
    }
  }

  getImage(image: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
