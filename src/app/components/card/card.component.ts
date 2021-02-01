import { Component, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'tr-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public url: string;
  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public description: string;
  @Input() public image: string;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
  }

  getImage() {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${this.image})`);
  }

}
