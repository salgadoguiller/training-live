import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/components/components.module';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news/news.component';
import { SpecificNewsComponent } from './specific-news/specific-news.component';


@NgModule({
  declarations: [NewsComponent, SpecificNewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ComponentsModule,
  ]
})
export class NewsModule { }
