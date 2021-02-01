import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [NavbarComponent, BannerComponent, CardComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [NavbarComponent, BannerComponent, CardComponent]
})
export class ComponentsModule { }
