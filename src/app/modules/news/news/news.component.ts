import { Component, OnInit } from '@angular/core';

import { Colors } from 'src/app/utilities/enums';
import { WagtailService } from 'src/app/services/wagtail.service';
import { News, NewsResponse } from 'src/app/services/news.interface';


@Component({
  selector: 'tr-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public color: Colors;
  public news: News[];

  constructor(
    private wagtailService: WagtailService,
  ) { }

  ngOnInit(): void {
    this.color = Colors.YELLOW

    this.wagtailService.getNews({
      fields:'id,title,description,short_description,image_url',
      child_of:1396
    }).subscribe((response: NewsResponse) => {
      this.news = response.items;
    });
  }

}
