import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { InformationComponent } from './information/information.component';
import { ArtNewsComponent } from './art-news/art-news.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

@NgModule({
  declarations: [HomeComponent, HomePageComponent, SponsorComponent, InformationComponent, ArtNewsComponent, FeedbackFormComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule {}
