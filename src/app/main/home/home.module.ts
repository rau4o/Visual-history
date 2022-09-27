import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [HomeComponent, HomePageComponent, SponsorComponent, InformationComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule {}
