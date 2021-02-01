import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { SpecificNewsComponent } from './specific-news/specific-news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: ':id',
    component: SpecificNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
