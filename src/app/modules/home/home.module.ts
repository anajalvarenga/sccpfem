import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PlayersSectionComponent } from './players-section/players-section.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NextMatchesSectionComponent } from './next-matches-section/next-matches-section.component';
import { TitlesSectionModule } from './titles-section/titles-section.module';

@NgModule({
  declarations: [
    HomeComponent,
    PlayersSectionComponent,
    NextMatchesSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    TitlesSectionModule,
  ]
})
export class HomeModule { }
