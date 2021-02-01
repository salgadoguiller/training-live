import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/components/components.module';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    ComponentsModule
  ]
})
export class SkillsModule { }
