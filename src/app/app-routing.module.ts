import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'news',
    loadChildren: () => import('src/app/modules/news/news.module').then((m) => m.NewsModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('src/app/modules/skills/skills.module').then((m) => m.SkillsModule)
  },
  {
    path: "**",
    redirectTo: '/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
