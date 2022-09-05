import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersCardComponent } from './players-card/players-card.component';
import { NextMatchCardComponent } from './next-match-card/next-match-card.component';



@NgModule({
  declarations: [
    PlayersCardComponent,
    NextMatchCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayersCardComponent,
    NextMatchCardComponent
  ]
})
export class ComponentsModule { }
